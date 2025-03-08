pipeline {
    agent any
    tools {
        nodejs 'NodeJS 23.9.0'  // Usa la versión configurada en Jenkins
    }
    stages {
        stage("Instalar dependencias") {
            steps {
                sh "npm ci"  // Mejor que "npm i" para CI/CD
            }
        }
        stage("Construcción") {
            steps {
                sh "npm run build"  // En lugar de "npm run dev"
            }
        }
        stage("Ejecutar pruebas") {
            steps {
                sh "npx cypress run"
            }
        }
    }
    post {
        always {
            echo "El pipeline se ha ejecutado"
        }
        success {
            echo 'El proyecto está funcionando correctamente'
        }
        failure {
            echo 'Hubo un error durante la construcción del pipeline'
        }
    }
}
