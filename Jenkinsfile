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
      }
    }
    stage('Display tests'){
          steps {
            junit 'test-results.xml'
          }
        }
  }
  post {
        always {
          junit 'tests/**/*.xml'
        }
      }
}
