pipeline{
    agent any
    stages{
        stage("getting project"){
            steps{
                sh "npm i"
            }
        }
        stage("building project"){
            steps{
                sh "npm run dev"
            }
        }
        stage("running tests"){
            steps{
                sh "npx cypress run"
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