import { 
  App,
  Stack,
  StackProps
} from "aws-cdk-lib"

export default class appStack extends Stack {
  constructor(scope: App, id: string, props: StackProps) {
  super(scope, id, props);
  }
};
