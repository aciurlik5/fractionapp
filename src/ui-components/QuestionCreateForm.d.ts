/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionCreateFormInputValues = {
    QID?: string;
    isCorrect?: boolean;
    questionText?: string;
    answerGiven?: string;
    correctAnswer?: string;
    guessCount?: number;
};
export declare type QuestionCreateFormValidationValues = {
    QID?: ValidationFunction<string>;
    isCorrect?: ValidationFunction<boolean>;
    questionText?: ValidationFunction<string>;
    answerGiven?: ValidationFunction<string>;
    correctAnswer?: ValidationFunction<string>;
    guessCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionCreateFormOverridesProps = {
    QuestionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    QID?: PrimitiveOverrideProps<TextFieldProps>;
    isCorrect?: PrimitiveOverrideProps<SwitchFieldProps>;
    questionText?: PrimitiveOverrideProps<TextFieldProps>;
    answerGiven?: PrimitiveOverrideProps<TextFieldProps>;
    correctAnswer?: PrimitiveOverrideProps<TextFieldProps>;
    guessCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionCreateFormProps = React.PropsWithChildren<{
    overrides?: QuestionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: QuestionCreateFormInputValues) => QuestionCreateFormInputValues;
    onSuccess?: (fields: QuestionCreateFormInputValues) => void;
    onError?: (fields: QuestionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionCreateFormInputValues) => QuestionCreateFormInputValues;
    onValidate?: QuestionCreateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionCreateForm(props: QuestionCreateFormProps): React.ReactElement;
