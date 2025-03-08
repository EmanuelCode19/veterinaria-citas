pipeline{
    agent any
     tools {
        nodejs 'nodeJS'
    }
    stages{
        stage("getting project"){
            steps{
                sh "npm ci"
            }
        }
        stage("building project"){
            steps{
                sh "npm run build"
            }
        }
        stage("running tests"){
            steps{
                sh 'docker run --rm -v $(pwd):/e2e -w /e2e cypress/included:14.1.0 npx cypress run --headless'
            }
        }

    }
    post {
        always {
            echo "El pipeline se ha ejecutado"
        }
        success {
            echo 'El proyecto esta funcionando correctamente'
        }
        failure {
            echo 'Hubo un error durante construccion del pipeline'
        }
    }
}