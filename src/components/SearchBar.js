import React from 'react'
import styled from 'styled-components'
import { VscChromeClose } from "react-icons/vsc"
/* when you type in the search bar & hit enter
takes you to the products page w/ your search */
const SearchBar = () => {
  return (
    <Wrapper>
      <nav className="searchbar">
        <div className="searchbar__inner">
          <label className="searchbar__label">
            <input className="searchbar__input" placeholder="What are you looking for?"/>
          </label>
          <button className="searchbar__close-btn">
            <VscChromeClose className="searchbar__close-btn-icon"/>
          </button>
        </div>
      </nav>
    </Wrapper>
  )
}

export default SearchBar


const Wrapper = styled.section`
  .searchbar {
    position:relative;
    background:#fff;
    height:5rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
  }

  .searchbar__inner {
    width:100%;
    height:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:0 25rem;
  }

  .searchbar__label {
    flex:1;
    width:100%;
    height:100%;
  }

  .searchbar__input {
    flex:1;
    width:100%;
    height:100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:1.25rem;
    border:none;
    border-bottom:1px solid #999;
  }

  .searchbar__input:focus {
    outline: none;
    border-bottom-color:var(--main-color);
    transition:color 0.2s ease;
  }

  .searchbar__close-btn {
    position:relative;
    background:none;
    border:none;
    height:100%;
    color:#636363;
    font-size:2.75rem;
    margin-left:0.5rem;
  }

  .searchbar__close-btn:hover {
    color:var(--main-color);
    transition:color 0.2s ease;
    cursor:pointer;
  }


  .searchbar__close-btn-icon {
    display:flex;
    justify-content:center;
    align-items:center;
  }
`