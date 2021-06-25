import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import * as peopleActions from "../../store/people/actions";
import UserCards from "../../components/organisms/UserCards";

const CardsWrapper = styled.section`
  margin: 0 auto;
  max-width: 100rem;
`;
const StarWarsTeam = ({ actions, people }) => {
  useEffect(() => {
    if (people.length === undefined) {
      actions.loadPeople(1);
    }
  });
  if (people.length > 0) {
    return (
      <CardsWrapper>
        <UserCards data={people} />
      </CardsWrapper>
    );
  } else {
    return <>Loading people.... </>;
  }
};

StarWarsTeam.propTypes = {
  people: PropTypes.object,
};

function mapStateToProps(state) {
  return {
    people: state.people,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadPeople: bindActionCreators(peopleActions.loadPeople, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsTeam);
