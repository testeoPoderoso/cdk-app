import { 
  App,
  Stack,
  StackProps
} from "aws-cdk-lib"
import { Bucket } from "aws-cdk-lib/lib/aws-s3";

export default class appStack extends Stack {
  constructor(scope: App, id: string, props: StackProps) {
  super(scope, id, props);

  new Bucket(this, 'MyNewAwesomeBucket', {
    bucketName: "example-bucket-testeo-poderoso",
  });
  }
};
