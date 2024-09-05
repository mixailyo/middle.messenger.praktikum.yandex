export interface ValidationRule {
	required: boolean;
	pattern?: RegExp;
	errorText: string;
}

export function validation(
	value: string,
	validationRule: ValidationRule
): boolean {
	const { required, pattern } = validationRule;

	if ((!value && required) || (pattern && !pattern.test(value))) {
		return false;
	}

	return true;
}
