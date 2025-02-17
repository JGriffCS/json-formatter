import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import NakedButton from "../../utils/NakedButton";

const Container = styled.li`
  padding: 1rem 2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  }
`;

const Description = styled.p`
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  overflow: hidden;
`;

function SingleItem({ name, description, onClick }) {
  return (
    <Container>
      <NakedButton
        css={`
          width: 100%;
        `}
        onClick={onClick}
      >
        <h3
          css={`
            margin: 0 0 0.3rem;
          `}
        >
          {name}
        </h3>
        <Description>{description}</Description>
      </NakedButton>
    </Container>
  );
}

SingleItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SingleItem;
