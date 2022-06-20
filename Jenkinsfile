pipeline {
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: 'cypress/intergration/**', description: 'Enter the script path that you want to execute')
        choice(name: 'BROWSER', choices: ['chrome', 'edge', 'firefox'], description: 'Choose the browser where you want to execute scripts')
    }

    options {
        ansiColor('xterm')
    }

    stages {
        
        stage('Build'){
            //The steps section defines a series of one or more steps to be executed in a given stage directive.
            steps {
                echo "Building the application"
            }
        }
        
        stage('Testing') {
            steps {
                bat "npm i"
                bat "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
            }
        }
        
        stage('Deploy'){
            steps {
                echo "Deploying"
            }
        }
    }
    post{
            always{
               
                publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'HTMl Report', reportTitles: ''])
            
            }
    }

}

