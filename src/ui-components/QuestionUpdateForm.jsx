/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Question } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function QuestionUpdateForm(props) {
  const {
    id: idProp,
    question: questionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    QID: "",
    isCorrect: false,
    questionText: "",
    answerGiven: "",
    correctAnswer: "",
    guessCount: "",
  };
  const [QID, setQID] = React.useState(initialValues.QID);
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
  const [guessCount, setGuessCount] = React.useState(initialValues.guessCount);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = questionRecord
      ? { ...initialValues, ...questionRecord }
      : initialValues;
    setQID(cleanValues.QID);
    setIsCorrect(cleanValues.isCorrect);
    setQuestionText(cleanValues.questionText);
    setAnswerGiven(cleanValues.answerGiven);
    setCorrectAnswer(cleanValues.correctAnswer);
    setGuessCount(cleanValues.guessCount);
    setErrors({});
  };
  const [questionRecord, setQuestionRecord] = React.useState(questionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Question, idProp)
        : questionModelProp;
      setQuestionRecord(record);
    };
    queryData();
  }, [idProp, questionModelProp]);
  React.useEffect(resetStateValues, [questionRecord]);
  const validations = {
    QID: [],
    isCorrect: [],
    questionText: [],
    answerGiven: [],
    correctAnswer: [],
    guessCount: [],
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
          QID,
          isCorrect,
          questionText,
          answerGiven,
          correctAnswer,
          guessCount,
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
          await DataStore.save(
            Question.copyOf(questionRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "QuestionUpdateForm")}
      {...rest}
    >
      <TextField
        label="Qid"
        isRequired={false}
        isReadOnly={false}
        value={QID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              QID: value,
              isCorrect,
              questionText,
              answerGiven,
              correctAnswer,
              guessCount,
            };
            const result = onChange(modelFields);
            value = result?.QID ?? value;
          }
          if (errors.QID?.hasError) {
            runValidationTasks("QID", value);
          }
          setQID(value);
        }}
        onBlur={() => runValidationTasks("QID", QID)}
        errorMessage={errors.QID?.errorMessage}
        hasError={errors.QID?.hasError}
        {...getOverrideProps(overrides, "QID")}
      ></TextField>
      <SwitchField
        label="Is correct"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isCorrect}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              QID,
              isCorrect: value,
              questionText,
              answerGiven,
              correctAnswer,
              guessCount,
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
      ></SwitchField>
      <TextField
        label="Question text"
        isRequired={false}
        isReadOnly={false}
        value={questionText}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              QID,
              isCorrect,
              questionText: value,
              answerGiven,
              correctAnswer,
              guessCount,
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
              QID,
              isCorrect,
              questionText,
              answerGiven: value,
              correctAnswer,
              guessCount,
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
              QID,
              isCorrect,
              questionText,
              answerGiven,
              correctAnswer: value,
              guessCount,
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
      <TextField
        label="Guess count"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={guessCount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              QID,
              isCorrect,
              questionText,
              answerGiven,
              correctAnswer,
              guessCount: value,
            };
            const result = onChange(modelFields);
            value = result?.guessCount ?? value;
          }
          if (errors.guessCount?.hasError) {
            runValidationTasks("guessCount", value);
          }
          setGuessCount(value);
        }}
        onBlur={() => runValidationTasks("guessCount", guessCount)}
        errorMessage={errors.guessCount?.errorMessage}
        hasError={errors.guessCount?.hasError}
        {...getOverrideProps(overrides, "guessCount")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || questionModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || questionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
