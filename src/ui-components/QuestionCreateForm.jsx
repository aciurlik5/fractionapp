/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Question } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function QuestionCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    isCorrect: "",
    questionText: "",
    answerGiven: "",
    correctAnswer: "",
  };
  const [isCorrect, setIsCorrect] = React.useState(initialValues.isCorrect);
  const [questionText, setQuestionText] = React.useState(
    initialValues.questionText
  );
  const [answerGiven, setAnswerGiven] = React.useState(
    initialValues.answerGiven
  );
  const [correctAnswer, setCorrectAnswer] = React.useState(
    initialValues.correctAnswer
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setIsCorrect(initialValues.isCorrect);
    setQuestionText(initialValues.questionText);
    setAnswerGiven(initialValues.answerGiven);
    setCorrectAnswer(initialValues.correctAnswer);
    setErrors({});
  };
  const validations = {
    isCorrect: [{ type: "Required" }],
    questionText: [],
    answerGiven: [],
    correctAnswer: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          isCorrect,
          questionText,
          answerGiven,
          correctAnswer,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Question(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuestionCreateForm")}
      {...rest}
    >
      <TextField
        label="Is correct"
        isRequired={true}
        isReadOnly={false}
        value={isCorrect}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isCorrect: value,
              questionText,
              answerGiven,
              correctAnswer,
            };
            const result = onChange(modelFields);
            value = result?.isCorrect ?? value;
          }
          if (errors.isCorrect?.hasError) {
            runValidationTasks("isCorrect", value);
          }
          setIsCorrect(value);
        }}
        onBlur={() => runValidationTasks("isCorrect", isCorrect)}
        errorMessage={errors.isCorrect?.errorMessage}
        hasError={errors.isCorrect?.hasError}
        {...getOverrideProps(overrides, "isCorrect")}
      ></TextField>
      <TextField
        label="Question text"
        isRequired={false}
        isReadOnly={false}
        value={questionText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isCorrect,
              questionText: value,
              answerGiven,
              correctAnswer,
            };
            const result = onChange(modelFields);
            value = result?.questionText ?? value;
          }
          if (errors.questionText?.hasError) {
            runValidationTasks("questionText", value);
          }
          setQuestionText(value);
        }}
        onBlur={() => runValidationTasks("questionText", questionText)}
        errorMessage={errors.questionText?.errorMessage}
        hasError={errors.questionText?.hasError}
        {...getOverrideProps(overrides, "questionText")}
      ></TextField>
      <TextField
        label="Answer given"
        isRequired={false}
        isReadOnly={false}
        value={answerGiven}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isCorrect,
              questionText,
              answerGiven: value,
              correctAnswer,
            };
            const result = onChange(modelFields);
            value = result?.answerGiven ?? value;
          }
          if (errors.answerGiven?.hasError) {
            runValidationTasks("answerGiven", value);
          }
          setAnswerGiven(value);
        }}
        onBlur={() => runValidationTasks("answerGiven", answerGiven)}
        errorMessage={errors.answerGiven?.errorMessage}
        hasError={errors.answerGiven?.hasError}
        {...getOverrideProps(overrides, "answerGiven")}
      ></TextField>
      <TextField
        label="Correct answer"
        isRequired={false}
        isReadOnly={false}
        value={correctAnswer}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              isCorrect,
              questionText,
              answerGiven,
              correctAnswer: value,
            };
            const result = onChange(modelFields);
            value = result?.correctAnswer ?? value;
          }
          if (errors.correctAnswer?.hasError) {
            runValidationTasks("correctAnswer", value);
          }
          setCorrectAnswer(value);
        }}
        onBlur={() => runValidationTasks("correctAnswer", correctAnswer)}
        errorMessage={errors.correctAnswer?.errorMessage}
        hasError={errors.correctAnswer?.hasError}
        {...getOverrideProps(overrides, "correctAnswer")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
