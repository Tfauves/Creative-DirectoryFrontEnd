import React from "react";
import Form from "./common/Form";
import InlineInputContainer from "./common/InlineInputContainer";
import Input from "./common/Form";
import AdvButton from "./common/AdvButton";

const MediaForm = (props) => {
  const { query, updateForm, onSubmit } = props;
  const handleChange = (e) => {
    updateForm(e.target.id, e.target.value);
  };

  const handleSubmit = (e) => {
    onSubmit(e);
  };

  return (
    <div>
      <h1 style={{ marginTop: "600px" }}>Hello</h1>
      <Form
        onSubmit={handleSubmit}
        style={{
          marginTop: "6em",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        <InlineInputContainer>
          <Input
            id="name"
            placeholder="Media Name"
            onChange={handleChange}
            // value={query.name}
          />
          <Input
            id="type"
            placeholder="Media Type"
            onChange={handleChange}
            // value={query.type}
          />
        </InlineInputContainer>
      </Form>
      <AdvButton
        style={{ marginTop: "10px" }}
        variant="primary"
        size="lg"
        type="submit"
      >
        add media
      </AdvButton>
    </div>
  );
};

export default MediaForm;
