pipeline {
  agent any
  stages {
    stage('Install dependencies'){
      steps {
        bat 'npm install'
      }
    }
    stage('Linter'){
          steps {
            bat 'npm run lint'
          }
        }
    stage('Launch tests'){
      steps {
        bat 'npm run test'
        junit 'report.xml'
      }
    }
  }
  post {
        always {
          junit 'report.xml'
        }
      }
}
