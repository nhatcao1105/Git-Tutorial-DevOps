#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { HudsonStack } from '../lib/hudson-stack';

const app = new cdk.App();
const myEnv = {account: '894811232850',region:'us-east-2'}
new HudsonStack(app, 'HudsonStack'),{env:myEnv};
