pipeline {
  agent any
  stages {
    stage('Install dependencies'){
      steps {
        bat 'npm install'
      }
    }
    stage('Launch tests'){
      steps {
        bat 'node node_modules/mocha/bin/mocha --ui bdd tests/lifecycle.test.js tests/fixtures/**/*.test.js'
      }
    }
  }
}
