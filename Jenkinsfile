pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS_ID = 'docker-credentials-id'
        SONARQUBE_SERVER = 'SonarQubeServer'
        SONARQUBE_CREDENTIALS = 'sonarqube-credentials-id'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/DanishKumar1001/SharePlate-Nourish-Give.git'
            }
        }
        
        stage('Build') {
            steps {
                script {
                    def app = docker.build("your-docker-image-name:${env.BUILD_ID}")
                    app.push()
                }
            }
        }
        
        stage('Test') {
            steps {
                sh './gradlew test' // or the appropriate test command for your project
            }
            post {
                always {
                    junit '**/build/test-results/test/*.xml' // adjust the path as necessary
                }
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                withSonarQubeEnv('SonarQubeServer') {
                    sh './gradlew sonarqube -Dsonar.projectKey=SharePlate -Dsonar.host.url=$SONARQUBE_SERVER -Dsonar.login=$SONARQUBE_CREDENTIALS'
                }
            }
        }
        
        stage('Deploy to Staging') {
            steps {
                script {
                    def app = docker.image("your-docker-image-name:${env.BUILD_ID}")
                    app.withRun('-p 8080:8080') { c ->
                        sh 'docker cp ./scripts/deploy.sh ${c.id}:/deploy.sh'
                        sh 'docker exec ${c.id} sh /deploy.sh'
                    }
                }
            }
        }
        
        stage('Release to Production') {
            steps {
                input message: 'Deploy to Production?', ok: 'Deploy'
                script {
                    def app = docker.image("your-docker-image-name:${env.BUILD_ID}")
                    app.push('latest')
                }
            }
        }
        
        stage('Monitoring and Alerting') {
            steps {
                // Assuming you have monitoring scripts or tools configured
                sh './scripts/monitoring-setup.sh'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

