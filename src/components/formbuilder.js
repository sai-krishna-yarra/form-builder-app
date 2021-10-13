import { Box, TextField, Button } from "@material-ui/core";
import React from "react";
import "./formbuilder.css";

export const Formbuilder = () => {
  const [questionsList, setQuestionsList] = React.useState([]);

  const question = {
    questionTitle: "",
    answerType: "",
    noOfAnswers: 0,
    answersList: [],
    isRequired: false,
  };

  const addQuestion = () => {
    setQuestionsList([...questionsList, question]);
  };

  return (
    <div className="form-builder-section">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: "1", width: "28ch", margin: "28px 30px" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="formTitle"
          label="Form Title"
          variant="standard"
          key="Confirmation Code"
        />
        <TextField
          id="formDescription"
          label="Form Description (Optional)"
          variant="standard"
        />
        <div>
          {questionsList.map((question, index) => {
            return (
              <div key={index} className="each-question">
                <TextField
                  id="formDescription"
                  label={`Question ${index + 1}`}
                  variant="standard"
                />
                <div className="button-container">
                  <Button
                    variant="contained"
                    aria-label="outlined primary button"
                    onClick={addQuestion}
                  >
                    Duplicate
                  </Button>
                  <Button
                    variant="contained"
                    aria-label="outlined primary button"
                    onClick={addQuestion}
                  >
                    Remove
                  </Button>
                  <Button
                    variant="contained"
                    aria-label="outlined primary button"
                    onClick={addQuestion}
                  >
                    Mandatory
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
        <Button
          variant="contained"
          aria-label="outlined primary button"
          onClick={addQuestion}
        >
          Add Question
        </Button>
      </Box>
    </div>
  );
};
