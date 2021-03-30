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
        bat 'npm run coverage'
        junit 'report.xml'
        junit 'tests/coverage/clover.xml'
      }
    }
  }
}
