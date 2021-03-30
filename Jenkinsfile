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
        junit 'tests/results/report.xml'
      }
    }
    stage('handle Tests coverage'){
      steps {
        bat 'npm run coverage'
        junit 'tests/coverage/cobertura-coverage.xml'
      }
    }
  }
}
