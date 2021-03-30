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
        junit 'tests/results/report.xml'
        // publish html coverage
        publishHTML target: [
          allowMissing: false,
          alwaysLinkToLastBuild: false,
          keepAll: true,
          reportDir: 'tests/coverage',
          reportFiles: 'index.html',
          reportName: 'Test coverage report'
        ]
      }
    }
  }
}
