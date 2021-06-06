#!/usr/bin/env groovy

/*
ref: https://www.jenkins.io/doc/book/pipeline/jenkinsfile/ 
agent: Its a directive, which is required, instructs jenkins to allocate an executor and workspace for the Pipeline
by default the agent directive ensures that the source repository is checkout and made available for the steps in the subsequent stages.
*/
pipeline {
    // agent any
    agent {
        docker {
            image 'node:10-alpine' 
        }
    }
    // These environment variables can be used inside any "stage" below
    // environment {
    //     AWS_ACCESS_KEY_ID = credentials('jenkins-aws-access-key-id')
    //     AWS_SECRET_KEY_ID = credentials('jenkins-aws-secret-key-id')
    // }
    stages {
        stage('build'){
            // Only available inside "build" stage
            // environment{
            //     username = credentials('username')
            // }
            steps{
                echo "hello world! hi"
                sh 'node --version'
            }
        }
        stage('Test'){
            steps{
                echo "Testing testing"
            }
        }
        stage('Deploy'){
            steps{
                echo "Deploying deploying"
            }
        }
    }
}