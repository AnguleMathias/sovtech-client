import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import * as peopleActions from "../../store/people/actions";
import PageNavigation from "../../components/organisms/PageNavigation";
import UserCards from "../../components/organisms/UserCards";

const CardsWrapper = styled.section`
  margin: 0 auto;
  max-width: 100rem;
`;

let clicked = 1;
const StarWarsTeam = ({ actions, people }) => {
  useEffect(() => {
    if (people.length === undefined) {
      actions.loadPeople(1);
    }
  }, []);

  const updatePage = async (e) => {
    clicked = e.target.text;
    console.log("clicked", clicked);
    return await actions.loadPeople(clicked);
  };

  if (people.length > 0) {
    return (
      <>
        <CardsWrapper>
          <UserCards data={people} />
        </CardsWrapper>
        <PageNavigation
          activeLabel={`active-page-${clicked}`}
          count={82}
          pageChanged={updatePage}
          clicked={clicked}
        />
      </>
    );
  } else {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }
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
