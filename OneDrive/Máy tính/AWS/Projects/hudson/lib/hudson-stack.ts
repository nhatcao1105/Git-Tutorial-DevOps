
import * as cdk from '@aws-cdk/core';
import * as apigateway from '@aws-cdk/aws-apigateway';
import * as lambda from '@aws-cdk/aws-lambda';

export class HudsonStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const handler = new lambda.Function(this,'function',{
      code: lambda.Code.fromAsset('resources'),
      handler: 'lambda.lambda_handler',
      runtime: lambda.Runtime.PYTHON_3_7,  
    });
    const api = new apigateway.LambdaRestApi(this, 'Endpoint',{
      handler:handler,
      proxy:false
    }) ;
    const items = api.root.addResource('items');
    items.addMethod('GET');
    items.addMethod('POST');  
    }
  }
  

