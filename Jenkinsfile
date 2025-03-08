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
            mail to: 'emanuel_4554@outlook.com', subject: 'Pipeline Finished', body: 'The pipeline has completed.'
        }
        success {
            echo 'El proyecto esta funcionando correctamente'
        }
        failure {
            echo 'Hubo un error durante construccion del pipeline'
        }
    }
}