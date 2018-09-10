import { ValidationArguments, Validator, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'arrayMongoId', async: false })
export class ArrayMongoId implements ValidatorConstraintInterface {
  validate(ids: string[], args: ValidationArguments) {
    const validator = new Validator();
    return ids.every(x => validator.isMongoId(x));
  }

  defaultMessage(args: ValidationArguments) {
    return 'Must contain array of mongo Id';
  }
}
