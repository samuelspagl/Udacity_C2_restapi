require('dotenv').config();

export const config = {
  "dev": {
    "username": "",
    "password": "",
    "database": "",
    "host": "",
    "dialect": "postgres",
    "aws_region": "eu-central-1",
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": "udagram-spagl-dev"
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret": process.env.JWT_SECRET
  }
}
