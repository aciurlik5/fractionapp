/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Question } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type QuestionUpdateFormInputValues = {
    QID?: string;
    isCorrect?: boolean;
    questionText?: string;
    answerGiven?: string;
    correctAnswer?: string;
    guessCount?: number;
};
export declare type QuestionUpdateFormValidationValues = {
    QID?: ValidationFunction<string>;
    isCorrect?: ValidationFunction<boolean>;
    questionText?: ValidationFunction<string>;
    answerGiven?: ValidationFunction<string>;
    correctAnswer?: ValidationFunction<string>;
    guessCount?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type QuestionUpdateFormOverridesProps = {
    QuestionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    QID?: PrimitiveOverrideProps<TextFieldProps>;
    isCorrect?: PrimitiveOverrideProps<SwitchFieldProps>;
    questionText?: PrimitiveOverrideProps<TextFieldProps>;
    answerGiven?: PrimitiveOverrideProps<TextFieldProps>;
    correctAnswer?: PrimitiveOverrideProps<TextFieldProps>;
    guessCount?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type QuestionUpdateFormProps = React.PropsWithChildren<{
    overrides?: QuestionUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    question?: Question;
    onSubmit?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onSuccess?: (fields: QuestionUpdateFormInputValues) => void;
    onError?: (fields: QuestionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: QuestionUpdateFormInputValues) => QuestionUpdateFormInputValues;
    onValidate?: QuestionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function QuestionUpdateForm(props: QuestionUpdateFormProps): React.ReactElement;
