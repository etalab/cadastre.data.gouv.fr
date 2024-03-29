import React from 'react'

function Template() {
  return (
    <style jsx global>{`
    /* global rules */

    @font-face {
      font-family: "Source Sans Pro";
      src: url("/static/fonts/SourceSansPro/SourceSansPro-Regular.otf.woff");
      font-weight: 400;
    }

    @font-face {
      font-family: "Source Sans Pro";
      src: url("/static/fonts/SourceSansPro/SourceSansPro-Bold.otf.woff");
      font-weight: 800;
    }

    @font-face {
      font-family: "Source Sans Pro";
      src: url("/static/fonts/SourceSansPro/SourceSansPro-It.otf.woff");
      font-style: italic;
    }

    @font-face {
      font-family: "Evolventa";
      src: url("/static/fonts/Evolventa/Evolventa-Regular.woff");
      font-weight: 400;
    }

    @font-face {
      font-family: "Evolventa";
      src: url("/static/fonts/Evolventa/Evolventa-Bold.woff");
      font-weight: 800;
    }

    /* Variables definition */
    :root {
      /* Colors */
      --blue: #0053b3;
      --light-blue: #006be6;
      --dark-blue: #003b80;
      --darker-blue: #00234d;
      --lighter-blue: #b4e1fa;
      --white: #fff;
      --lightest-grey: #fafbfc;
      --lighter-grey: #ebeff3;
      --light-grey: #c9d3df;
      --grey: #adb9c9;
      --dark-grey: #8393a7;
      --darker-grey: #53657d;
      --darkest-grey: #26353f;
      --black: #1c1c1c;
      --green: #03bd5b;
      --light-green: #daf5e7;
      --orange: #ff9947;
      --dark-orange: #cc5c00;
      --light-orange: #fff0e4;
      --red: #d63626;
      --dark-red: #ab2b1e;
      --light-red: rgba(239,172,166,0.45882);

      /* Breakpoints */
      --mobile-min: 400px;
      --mobile-max: 549px;
      --phablet-min: 550px;
      --phablet-max: 749px;
      --tablet-min: 750px;
      --tablet-max: 999px;
      --desktop-min: 1000px;

      /* Spaces */
      --space-xxs: 0.25em;
      --space-xs: 0.5em;
      --space-s: 1em;
      --space-m: 1.5em;
      --space-l: 2em;
      --space-xl: 3em;

      /* Theme */
      --theme-primary: var(--blue);
      --theme-primary-light: var(--light-blue);
      --theme-primary-dark: var(--dark-blue);
      --theme-secondary: var(--blue);
      --theme-secondary-darken: var(--dark-blue);
      --theme-border: var(--grey);
      --theme-border-lighter: var(--light-grey);
      --theme-border-active: var(--light-blue);
      --theme-border-radius: 3px;
      --theme-background-white: var(--white);
      --theme-background-grey: var(--lighter-grey);
      --theme-background-color: var(--blue);
      --theme-background-color-dark: var(--darker-blue);
      --theme-background-gradient: linear-gradient(to left, var(--blue), var(--dark-blue));
      --theme-background-dark: var(--black);
      --theme-box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
      --theme-label-text: var(--darker-grey);
      --theme-light-text: var(--white);
      --theme-dark-text: var(--darkest-grey);
      --theme-success-border: var(--green);
      --theme-success-bg: var(--light-green);
      --theme-warning-border: var(--orange);
      --theme-warning-bg: var(--light-orange);
      --theme-error-border: var(--red);
      --theme-error-bg: var(--light-red);
      --theme-info-border: var(--light-blue);
      --theme-info-bg: var(--lighter-blue);
    }

    body {
      font-family: "Source Sans Pro", Arial, sans-serif;
      font-size: 16px;
      line-height: 1.5em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: "Evolventa", "Trebuchet MS", sans-serif;
    }

    h1:first-child,
    h2:first-child,
    h3:first-child,
    h4:first-child,
    h5:first-child,
    h6:first-child {
      margin-top: 0;
    }

    h1 {
      font-size: 2em;
      line-height: 1.125em;
    }

    h2 {
      font-size: 1.75em;
      line-height: 1.25em;
    }

    h3 {
      font-size: 1.5em;
      line-height: 1.5em;
    }

    h4 {
      font-size: 1.25em;
    }

    h5 {
      font-size: 1.125em;
    }

    h6 {
      font-size: 1em;
    }

    .subtitle {
      font-weight: 400;
      font-family: "Source Sans Pro", Arial, sans-serif;
      color: #53657d;
      color: var(--darker-grey);
    }

    .lead-text {
      font-size: 1.25em;
    }

    .subtitle {
      color: #8393a7;
      color: var(--dark-grey);
    }

    .text-quote {
      background-color: #ebeff3;
      background-color: var(--theme-background-grey);
      border-left: 8px solid #c9d3df;
      border-left: 8px solid var(--theme-border-lighter);
      padding: 4px 0 4px 25px;
    }

    pre {
      display: block;
      margin-top: 1em;
    }

    code {
      background: #fafbfc;
      background: var(--lightest-grey);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      padding: 0 0.5em;
      font-family: 'Courier New';
      font-size: 0.9em;
      word-wrap: break-word;
      white-space: pre-wrap;
      vertical-align: middle;
      display: inline-block;
      max-width: 100%;
      overflow-x: auto;
    }

    pre code {
      padding: 1em;
    }

    * {
      -webkit-box-sizing: border-box;
              box-sizing: border-box;
    }

    html,
    body {
      height: 100%;
      position: relative;
    }

    body {
      color: #26353f;
      color: var(--theme-dark-text);
      padding: 0;
      margin: 0;
      overflow: auto;
    }

    a,
    button {
      cursor: pointer;
    }

    a,
    a:focus,
    a:visited,
    a:active {
      text-decoration: underline;
      color: #0053b3;
      color: var(--theme-primary);
    }

    a:hover {
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      color: #003b80;
      color: var(--dark-blue);
      background-color: #ebeff3;
      background-color: var(--lighter-grey);
      text-decoration: none;
    }

    small {
      font-size: 0.875em;
    }

    hr {
      border-top: 0;
      border-bottom: #c9d3df;
      border-bottom: var(--theme-border-lighter);
      margin: 2em 0;
      margin: var(--space-l) 0;
    }

    dt {
      display: block;
      color: #53657d;
      color: var(--darker-grey);
    }

    dd {
      margin: 0;
    }

    dd + dt {
      margin-top: 0.5em;
      margin-top: var(--space-xs);
    }

    /* basic elements */
    input,
    textarea,
    select {
      width: 100%;
      outline: none;
      padding: 0.5em 0.875em;
      font: inherit;
      line-height: 1.6;
      color: #1c1c1c;
      color: var(--black);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      border: 1px solid #adb9c9;
      border: 1px solid var(--theme-border);
      background: #fff;
      background: var(--theme-background-white);
      vertical-align: middle;
      position: relative;
    }

    input:focus,
    textarea:focus,
    select:focus {
      border-color: #006be6;
      border-color: var(--theme-border-active);
      -webkit-transition: border-color 0.2s ease-out;
      transition: border-color 0.2s ease-out;
    }

    input:disabled,
    select:disabled {
      background-color: #ebeff3;
      background-color: var(--theme-background-grey);
    }

    input[type=radio],
    input[type=checkbox] {
      margin: 0;
      margin-right: 0.5em;
      margin-right: var(--space-xs);
    }

    input[type=radio] {
      height: 1.25em;
      width: 1.25em;
      border-radius: 50%;
      display: inline-block;
      -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
      padding: 0;
    }

    input[type=radio]::before {
      content: '';
      border-color: #0053b3;
      border-color: var(--theme-primary);
      border-radius: 50%;
      position: absolute;
      top: 0.35em;
      left: 0.3em;
      width: 0.5em;
      height: 0.5em;
      -webkit-transform: scale(0);
              transform: scale(0);
    }

    input[type=radio]:checked {
      background-color: #fff;
      background-color: var(--theme-background-white);
      border-color: #0053b3;
      border-color: var(--theme-primary);
      opacity: 1;
    }

    input[type=radio]:checked::before {
      background-color: #0053b3;
      background-color: var(--theme-primary);
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transition: -webkit-transform 0.2s ease-out;
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
      transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    input[type="checkbox"] {
      -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
      height: 1.4em;
      width: 1.5em;
      padding: 0;
    }

    input[type="checkbox"]:checked {
      background-color: #0053b3;
      background-color: var(--theme-primary);
      border-color: #0053b3;
      border-color: var(--theme-primary);
      opacity: 1;
      -webkit-transition: border-color 0.2s ease-in, background-color 0.2s ease-out;
      transition: border-color 0.2s ease-in, background-color 0.2s ease-out;
    }

    input[type="checkbox"]::before {
      -webkit-transform: scale(0);
              transform: scale(0);
      content: '';
      position: absolute;
      top: 0.2em;
      left: 0.15em;
      height: 1em;
      width: 1em;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M14.23 1.304L6.112 9.501 2.767 6.117a1.029 1.029 0 0 0-1.464 0 1.054 1.054 0 0 0 0 1.479l4.055 4.101c.208.21.481.31.754.305.272.005.545-.095.753-.305l8.829-8.915a1.053 1.053 0 0 0 0-1.478 1.027 1.027 0 0 0-1.464 0z" fill="white" /></svg>') center center no-repeat;
    }

    input[type="checkbox"]:checked::before {
      color: #fff;
      color: var(--white);
      display: block;
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transition: -webkit-transform 0.2s ease-out;
      transition: -webkit-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
      transition: transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }

    select {
      -webkit-appearance: none;
        -moz-appearance: none;
              appearance: none;
      background: #fff url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M1.254 2.518a.904.904 0 0 1 0-1.257.85.85 0 0 1 1.225 0l4.512 4.632 4.511-4.632a.85.85 0 0 1 1.225 0 .904.904 0 0 1 0 1.257L7.621 7.761a.848.848 0 0 1-.63.259.849.849 0 0 1-.631-.259L1.254 2.518z" fill="gray"/></svg>') no-repeat;
      background: var(--theme-background-white) url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><path d="M1.254 2.518a.904.904 0 0 1 0-1.257.85.85 0 0 1 1.225 0l4.512 4.632 4.511-4.632a.85.85 0 0 1 1.225 0 .904.904 0 0 1 0 1.257L7.621 7.761a.848.848 0 0 1-.63.259.849.849 0 0 1-.631-.259L1.254 2.518z" fill="gray"/></svg>') no-repeat;
      background-position: top 1em right 0;
      background-size: 1.7em;
      padding-right: 2.8em;
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      width: auto;
    }

    @-moz-document url-prefix() {
      select {
        padding-top: 0.438em;
        padding-bottom: 0.438em;
      }
    }

    select:focus {
      outline: none;
    }

    select:-moz-focusring {
      color: transparent;
      text-shadow: 0 0 0 #000;
    }

    label.required::before {
      content: '✱';
      color: #d63626;
      color: var(--red);
      font-weight: 700;
      padding-right: 0.5em;
      padding-right: var(--space-xs);
      position: absolute;
      left: 0;
      -webkit-transform: translateX(-100%);
              transform: translateX(-100%);
    }

    a.button,
    a.button:focus,
    a.button:active,
    a.button:visited,
    button.button,
    button.button:focus,
    button.button:active,
    button.button:visited,
    input[type="submit"],
    input[type="submit"]:focus,
    input[type="submit"]:active,
    input[type="submit"]:visited,
    input[type="button"],
    input[type="button"]:focus,
    input[type="button"]:active,
    input[type="button"]:visited {
      display: inline-block;
      padding: 0.5em 2em;
      padding: var(--space-xs) var(--space-l);
      color: #fff;
      color: var(--theme-light-text);
      background-color: #0053b3;
      background-color: var(--theme-primary);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      border: 0;
      font-family: "Source Sans Pro", Arial, sans-serif;
      font-size: 1em;
      font-size: var(--space-s);
      position: relative;
      top: 0;
      overflow: hidden;
      text-decoration: none;
      cursor: pointer;
      width: auto;
    }

    a.button:hover,
    button.button:hover,
    input[type="submit"]:hover,
    input[type="button"]:hover {
      background: #003b80;
      background: var(--theme-secondary-darken);
    }

    a.button:active,
    button.button:active,
    input[type="submit"]:hover,
    input[type="button"]:hover {
      -webkit-transform: translateY(1px);
              transform: translateY(1px);
    }

    button::-moz-focus-inner {
      border: 0;
    }

    a.button-outline,
    a.button-outline:focus,
    a.button-outline:active,
    a.button-outline:visited,
    button.button-outline,
    button.button-outline:focus,
    button.button-outline:active,
    button.button-outline:visited {
      display: inline-block;
      padding: 0.5em 2em;
      padding: var(--space-xs) var(--space-l);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      font-family: "Source Sans Pro", Arial, sans-serif;
      font-size: 1em;
      font-size: var(--space-s);
      position: relative;
      top: 0;
      overflow: hidden;
      text-decoration: none;
      background: transparent;
      border: 1px solid #fff;
      border: 1px solid var(--white);
      color: #fff;
      color: var(--white);
    }

    a.button-outline:hover,
    button.button-outline:hover,
    input[type="submit"].button-outline:hover,
    input[type="button"].button-outline:hover {
      border-color: #c9d3df;
      border-color: var(--light-grey);
      color: #c9d3df;
      color: var(--light-grey);
    }

    .button-outline.primary,
    a.button-outline.primary {
      border-color: #0053b3;
      border-color: var(--blue);
      color: #0053b3;
      color: var(--blue);
    }

    .button-outline.primary:hover,
    .button-outline.primary:active {
      border-color: #003b80;
      border-color: var(--dark-blue);
      color: #003b80;
      color: var(--dark-blue);
    }

    .button-outline.warning,
    a.button-outline.warning {
      border-color: #d63626;
      border-color: var(--red);
      color: #d63626;
      color: var(--red);
    }

    .button-outline.warning:hover,
    .button-outline.warning:active {
      border-color: #ab2b1e;
      border-color: var(--dark-red);
      color: #ab2b1e;
      color: var(--dark-red);
    }

    .button-outline.secondary,
    a.button-outline.secondary {
      border-color: #53657d;
      border-color: var(--darker-grey);
      color: #53657d;
      color: var(--darker-grey);
    }

    .button-outline.secondary:hover,
    .button-outline.secondary:active {
      border-color: #26353f;
      border-color: var(--darkest-grey);
      color: #26353f;
      color: var(--theme-dark-text);
    }

    a.button.small,
    button.button.small,
    input[type="submit"].small,
    input[type="button"].small,
    a.button-outline.small,
    button.button-outline.small {
      font-size: 0.825em;
      padding: 0.25em 1em;
    }

    a.button.large,
    button.button.large,
    input[type="submit"].large,
    input[type="button"].large,
    a.button-outline.large,
    button.button-outline.large {
      font-size: 1.25em;
    }

    .button.warning,
    a.button.warning {
      background-color: #d63626;
      background-color: var(--red);
    }

    .button.warning:hover,
    .button.warning:active {
      background-color: #ab2b1e;
      background-color: var(--dark-red);
    }

    .button.warning-light,
    a.button.warning-light {
      background-color: #ff9947;
      background-color: var(--orange);
    }

    .button.warning-light:hover,
    .button.warning-light:active {
      background-color: #cc5c00;
      background-color: var(--dark-orange);
    }

    .button.secondary,
    a.button.secondary {
      background-color: #53657d;
      background-color: var(--darker-grey);
    }

    .button.secondary:hover,
    .button.secondary:active {
      background-color: #26353f;
      background-color: var(--darkest-grey);
    }

    .button + .button,
    .button-outline + .button-outline {
      margin-left: 1em;
    }

    @media (max-width: 399px) {
      a.button,
      button.button,
      input[type="submit"],
      input[type="button"] {
        width: 100%;
      }

      .button + .button,
      .button-outline + .button-outline {
        margin-top: 1em;
        margin-left: 0;
      }
    }

    .table {
      background: #fff;
      background: var(--theme-background-white);
      border: 1px solid #c9d3df;
      border: 1px solid var(--theme-border-lighter);
      border-left: 0;
      border-right: 0;
      border-radius: 2px;
      position: relative;
      width: 100%;
      border-collapse: collapse;
    }

    .table td,
    .table th {
      padding: 1em;
      padding: var(--space-s);
      text-align: left;
    }

    .table td {
      border-top: 1px solid #ebeff3;
      border-top: 1px solid var(--lighter-grey);
    }

    .table thead th {
      background: #fafbfc;
      background: var(--lightest-grey);
      border-bottom: 1px solid #c9d3df;
      border-bottom: 1px solid var(--theme-border-lighter);
      font-size: 0.875em;
      font-weight: 700;
      text-transform: uppercase;
    }

    .table thead th.ascending::after {
      font-size: 0.75em;
      content: '▲';
      margin-left: 0.5em;
      margin-left: var(--space-xs);
    }

    .table thead th.descending::after {
      font-size: 0.75em;
      content: '▼';
      margin-left: 0.5em;
      margin-left: var(--space-xs);
    }

    .table tr:hover {
      background: #fafbfc;
      background: var(--lightest-grey);
    }

    .table__filter {
      margin-bottom: 1em;
      margin-bottom: var(--space-s);
      max-width: 20em;
      float: right;
    }

    .icon {
      display: inline-block;
      width: 1em;
      height: 1em;
      stroke-width: 0;
      stroke: currentColor;
      fill: currentColor;
      font-size: 16px;
    }

    #icon-search {
      fill: #adb9c9;
      fill: var(--grey);
    }

    .label-list {
      padding: 0;
      margin: 0;
    }

    .label {
      background-color: #ebeff3;
      background-color: var(--lighter-grey);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      display: inline-block;
      padding: 0.3em 0.8em;
      margin: 0.25em;
      font-size: 0.875em;
    }

    .label a {
      text-decoration: none;
      color: #26353f;
      color: var(--theme-dark-text);
    }

    .label--active {
      background-color: #0053b3;
      background-color: var(--theme-primary);
      color: #fff;
      color: var(--white);
    }

    .label--inactive {
      background-color: #fff;
      background-color: var(--white);
      border: 1px solid #adb9c9;
      border: 1px solid var(--theme-border);
      color: #53657d;
      color: var(--darker-grey);
    }

    .label--inactive a {
      color: #53657d;
      color: var(--darker-grey);
      background: 0;
    }

    /* recurring components */
    form {
      max-width: 35em;
      margin: 0 auto;
    }

    label,
    legend {
      display: block;
      color: #26353f;
      color: var(--theme-dark-text);
    }

    legend {
      margin-bottom: 0.5em;
      margin-bottom: var(--space-xs);
    }

    label.label-inline {
      display: inline;
      color: #1c1c1c;
      color: var(--black);
    }

    .label-inline + input[type=radio],
    .label-inline + input[type=checkbox] {
      margin-left: 1.5em;
      margin-left: var(--space-m);
      -ms-flex-negative: 0;
          flex-shrink: 0;
    }

    .form__group {
      position: relative;
      display: block;
    }

    .form__group + .form__group {
      margin-top: 2em;
      margin-top: var(--space-l);
    }

    fieldset {
      border: none;
      margin: 0;
      padding: 0;
      width: 100%;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
    }

    .overlay-button {
      position: absolute;
      right: 2em;
      right: var(--space-l);
      top: calc(1px + 0.8rem);
      background: 0;
      border: 0;
      width: 1rem;
      height: 1rem;
    }

    .search__group {
      position: relative;
    }

    .overlayed-button .icon-search {
      height: 15px;
      width: 15px;
    }

    .input__group {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
    }

    .input__group .icon-button,
    .input__group .icon-button:active {
      margin-left: 1em;
      margin-left: var(--space-s);
      padding: 0 0.8em;
    }

    .input__group .icon-button .icon {
      width: 16px;
      height: 16px;
    }

    .input__group .button {
      -ms-flex-negative: 0;
          flex-shrink: 0;
      margin-left: 1em;
      margin-left: var(--space-s);
    }

    @media (max-width: 399px) {
      .input__group {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }

      .input__group .button {
        margin-left: 0;
        margin-top: 1em;
        margin-top: var(--space-s);
      }
    }

    .card {
      background: #fff;
      background: var(--theme-background-white);
      border-radius: 2px;
      -webkit-box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
              box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
      -webkit-box-shadow: var(--theme-box-shadow);
              box-shadow: var(--theme-box-shadow);
      position: relative;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      width: 100%;
      border: 1px solid #c9d3df;
      border: 1px solid var(--theme-border-lighter);
    }

    .row .card + .card {
      margin-left: 1.5em;
      margin-left: var(--space-m);
    }

    @media (max-width: 749px) {
      .row > .card {
        margin: 0;
      }

      .row > .card + .card {
        margin-left: 0;
        margin-top: 1.5em;
        margin-top: var(--space-m);
      }
    }

    .card__cover {
      height: 250px;
      width: 100%;
      overflow: hidden;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      background-color: #0053b3;
      background-color: var(--theme-background-color);
    }

    .card__cover img {
      -o-object-fit: cover;
        object-fit: cover; /* will not work on IE and Edge < 16 */
      height: 100%;
      width: 100%;
    }

    .card__content {
      padding: 1.5em;
      padding: var(--space-m);
      -webkit-box-flex: 1;
          -ms-flex-positive: 1;
              flex-grow: 1;
    }

    .card__content h3 {
      margin: 0;
    }

    .card__content .card__meta {
      color: #53657d;
      color: var(--darker-grey);
    }

    .card__content .card__meta time::after {
      content: " • ";
    }

    .card__content :last-child {
      margin-bottom: 0;
    }

    .card__extra {
      border-top: 1px solid #adb9c9;
      border-top: 1px solid var(--theme-border);
      padding: 1em;
      padding: var(--space-s);
    }

    .panel {
      background: #fff;
      background: var(--theme-background-white);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      -webkit-box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
              box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
      -webkit-box-shadow: var(--theme-box-shadow);
              box-shadow: var(--theme-box-shadow);
      padding: 1.5em;
      padding: var(--space-m);
      position: relative;
      border: 1px solid #c9d3df;
      border: 1px solid var(--theme-border-lighter);
    }

    .panel + * {
      margin-top: 1.5em;
      margin-top: var(--space-m);
    }

    .panel > :last-child {
      margin-bottom: 0;
    }

    .panel__header::after {
      content: '';
      display: block;
      width: calc(100% + 1.5em * 2);
      width: calc(100% + var(--space-m) * 2);
      position: relative;
      left: -1.5em;
      border-bottom: 1px solid #c9d3df;
      border-bottom: 1px solid var(--theme-border-lighter);
      margin: 1em 0 1.5em;
      margin: var(--space-s) 0 var(--space-m);
    }

    .panel__header h3 {
      display: inline-block;
      margin: 0;
    }

    .panel__header-extra {
      margin-left: 1em;
      margin-left: var(--space-s);
      color: #53657d;
      color: var(--theme-label-text);
      display: inline-block;
    }

    @media (max-width: 549px) {
      .panel__header-extra {
        margin: 0;
      }
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #fff;
      background-color: var(--white);
      min-width: 110px;
      text-align: center;
      top: 2em;
      top: var(--space-l);
      right: 0;
      -webkit-box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
              box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      z-index: 1;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
    }

    .dropdown-content a:hover {
      background-color: #c9d3df;
      background-color: var(--light-grey);
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }

    .modal__backdrop {
      position: fixed;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
      height: 100%;
      width: 100%;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      display: none;
      z-index: 10;
    }

    /* no js modal */
    .modal__backdrop:target {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    .modal {
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      -webkit-box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
              box-shadow: 0 1px 2px rgba(201, 211, 223, 0.2);
      -webkit-box-shadow: var(--theme-box-shadow);
              box-shadow: var(--theme-box-shadow);
      background: #fff;
      background: var(--white);
      padding: 1.5em;
      padding: var(--space-m);
      max-width: 32em;
    }

    .modal > :first-child {
      margin-top: 0;
    }

    .modal .button__group {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      margin-top: 1.5em;
      margin-top: var(--space-m);
    }

    .modal .button__group .button {
      margin: 0;
    }

    .modal .button__group .button + .button {
      margin-left: 1em;
    }

    .notification {
      background: #b4e1fa;
      background: var(--theme-info-bg);
      border: 1px solid #006be6;
      border: 1px solid var(--theme-info-border);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      padding: 1em;
      padding: var(--space-s);
      margin-bottom: 1em;
      position: relative;
    }

    .notification .close {
      border: 0;
      background: 0;
      color: currentColor;
      position: absolute;
      right: 1em;
      right: var(--space-s);
    }

    .notification .icon {
      fill: currentColor;
      width: 20px;
      height: 20px;
    }

    .notification.closable {
      padding-right: 3em;
      padding-right: var(--space-xl);
    }

    .notification.full-width {
      width: 100%;
      margin-bottom: 0;
      text-align: center;
      border: 0;
    }

    .notification.full-width.closable .close {
      right: unset;
    }

    .notification.success {
      background: #daf5e7;
      background: var(--theme-success-bg);
      border-color: #03bd5b;
      border-color: var(--theme-success-border);
    }

    .notification.warning {
      background: #fff0e4;
      background: var(--theme-warning-bg);
      border-color: #ff9947;
      border-color: var(--theme-warning-border);
    }

    .notification.error {
      background: rgba(239,172,166,0.45882);
      background: var(--theme-error-bg);
      border-color: #d63626;
      border-color: var(--theme-error-border);
    }

    .tile {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      background-color: #fff;
      background-color: var(--theme-background-white);
      width: 100%;
      padding: 1em;
      padding: var(--space-s);
      -webkit-transform: none;
              transform: none;
      -webkit-transition: all 0.1s ease-in;
      transition: all 0.1s ease-in;
    }

    .tile:hover {
      -webkit-transform: scale(1.03);
              transform: scale(1.03);
    }

    .tile-colored {
      background-color: #0053b3;
      background-color: var(--theme-background-color);
      color: #fff;
      color: var(--theme-light-text);
    }

    .tile h3 {
      margin: 0;
    }

    .tile__icon {
      height: 2em;
      height: var(--space-l);
    }
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    .pagination {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-box-pack: end;
          -ms-flex-pack: end;
              justify-content: end;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      margin-top: 1.5em;
      margin-top: var(--space-m);
    }
    /* stylelint-enable declaration-block-no-redundant-longhand-properties */
    .pagination__display-group {
      margin-left: 1.5em;
      margin-left: var(--space-m);
    }

    .pagination__display-label {
      display: inline;
    }

    select.pagination__display {
      margin-left: 0.5em;
      margin-left: var(--space-xs);
      padding-top: 0.25em;
      padding-top: var(--space-xxs);
      padding-bottom: 0.25em;
      padding-bottom: var(--space-xxs);
    }

    .pagination__count {
      margin-left: 1.5em;
      margin-left: var(--space-m);
    }

    .pagination__pages {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: end;
          -ms-flex-pack: end;
              justify-content: end;
      margin-left: 1.5em;
      margin-left: var(--space-m);
    }

    .pagination__pages li a {
      color: #0053b3;
      color: var(--theme-primary);
      background-color: #fff;
      background-color: var(--theme-background-white);
      margin: 0 0.25em;
      margin: 0 var(--space-xxs);
      padding: 0.25em 0.5em;
      padding: var(--space-xxs) var(--space-xs);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      font-weight: 700;
      pointer-events: inherit;
      text-decoration: none;
      display: block;
    }

    .pagination__pages li a:hover {
      background-color: #b4e1fa;
      background-color: var(--lighter-blue);
    }

    .pagination__pages li.active a {
      color: #fff;
      color: var(--theme-light-text);
      background-color: #0053b3;
      background-color: var(--theme-background-color);
    }

    .pagination__pages li.disabled a {
      color: #8393a7;
      color: var(--dark-grey);
      background-color: #fafbfc;
      background-color: var(--lightest-grey);
      pointer-events: none;
    }

    /* larger components */
    .container {
      position: relative;
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .container.container-medium {
      max-width: 750px;
    }

    .container.container-small {
      max-width: 550px;
    }

    .container.container-full {
      max-width: none;
    }

    .article__container {
      max-width: 35em;
    }

    @media (min-width: 400px) {
      .container {
        width: 85%;
        padding: 0;
      }
    }

    @media (min-width: 550px) {
      .container {
        width: 80%;
      }
    }

    .navbar {
      width: 100%;
      background: #fff;
      background: var(--theme-background-white);
      z-index: 100;
    }

    .nav-fixed {
      position: fixed;
      top: 0;
    }

    .navbar__container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -ms-flex-wrap: wrap;
          flex-wrap: wrap;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      padding: 1em;
      padding: var(--space-s);
    }

    .navbar__home {
      height: 40px;
    }

    .navbar__logo {
      height: 100%;
    }

    .nav__links {
      display: inline-block;
      margin: 0;
      padding: 0;
      list-style-type: none;
    }

    .nav__item {
      padding: 0;
      display: inline-block;
    }

    .nav__item a,
    .nav__item .dropdown {
      text-decoration: none;
      color: #1c1c1c;
      color: var(--black);
      padding: 0.4em 0.8em;
      border-radius: 3px;
    }

    .nav__links a::after {
      content: none;
    }

    .nav__item a:hover,
    .nav__item .dropdown:hover {
      background: #ebeff3;
      background: var(--lighter-grey);
    }

    .nav__item a.active {
      background: #0053b3;
      background: var(--theme-primary);
      color: #fff;
      color: var(--white);
    }

    a.navbar__home {
      font-family: 'Evolventa';
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      color: #26353f;
      color: var(--theme-dark-text);
      letter-spacing: 0.05em;
      text-decoration: none;
    }

    .navbar__home img {
      vertical-align: middle;
    }

    .navbar__logo {
      margin-right: 0.8em;
    }

    .navbar__gouvfr {
      height: 100%;
    }

    span.navbar__domain {
      font-weight: 400;
      color: #26353f;
      color: var(--theme-dark-text);
      -webkit-padding-after: 3px; /* fix the broken line-height in logo */
    }

    @media (max-width: 749px) {
      .navbar__container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-align: start;
            -ms-flex-align: start;
                align-items: flex-start;
      }

      .nav__links {
        padding-top: 1em;
        padding-top: var(--space-s);
      }
    }

    .hero {
      width: 100%;
      background: #fff;
      background: var(--theme-background-white);
    }

    .hero-color {
      background: #0053b3;
      background: var(--theme-background-color);
    }

    .hero__container {
      min-height: 25em;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      padding: 2em;
      padding: var(--space-l);
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero h1 {
      margin-bottom: 0;
    }

    .hero-color h1 {
      color: #fff;
      color: var(--theme-light-text);
    }

    .hero p {
      margin: 1em auto;
      margin: var(--space-s) auto;
      color: #26353f;
      color: var(--theme-dark-text);
      font-size: 1.5em;
    }

    .hero-color p {
      color: #fff;
      color: var(--theme-light-text);
    }

    .footer {
      background: #1c1c1c;
      background: var(--theme-background-dark);
      color: #fff;
      color: var(--white);
      padding: 2em 0;
      padding: var(--space-l) 0;
    }

    .footer a:hover {
      background: 0;
    }

    .footer .container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-flow: row wrap;
              flex-flow: row wrap;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
    }

    .footer ul {
      list-style-type: none;
      padding: 0;
    }

    .footer__social {
      margin-top: 1em;
      margin-top: var(--space-s);
    }

    .footer__social li {
      display: inline;
      margin-right: 1em;
      margin-right: var(--space-s);
    }

    .footer__social .icon {
      width: 35px;
      height: 35px;
      fill: #fff;
      fill: var(--white);
    }

    .footer__links {
      margin: 0;
      line-height: 2em;
      line-height: var(--space-l);
    }

    .footer__links h2 {
      margin-top: 0;
      margin-bottom: 0.5em;
      margin-bottom: var(--space-xs);
    }

    .footer__links a {
      color: #fff;
      color: var(--white);
      text-decoration: none;
    }

    .footer__links a:hover {
      background: #53657d;
      background: var(--darker-grey);
    }

    .footer__logo {
      width: 300px;
      height: auto;
    }

    .footer__logo img {
      max-height: 60px;
    }

    @media (max-width: 999px) {
      .footer .container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }
    }

    .section {
      padding: 5em 0;
    }

    .section-white {
      background-color: #fff;
      background-color: var(--theme-background-white);
    }

    .section-grey {
      background-color: #ebeff3;
      background-color: var(--theme-background-grey);
    }

    .section-dark {
      background-color: #1c1c1c;
      background-color: var(--theme-background-dark);
      color: #fff;
    }

    .section-color {
      background-image: -webkit-gradient(linear, right top, left top, from(#0053b3), to(#003b80));
      background-image: linear-gradient(to left, #0053b3, #003b80);
      background-image: var(--theme-background-gradient);
      color: #fff;
    }

    .section-color-dark {
      background-color: #00234d;
      background-color: var(--theme-background-color-dark);
      color: #fff;
    }

    .section__title:first-child {
      margin-top: 0;
      margin-bottom: 0.5em;
      margin-bottom: var(--space-xs);
    }

    .section__subtitle {
      margin: 0 auto;
      font-weight: 400;
      font-size: 1.25em;
      font-family: "Source Sans Pro", Arial, sans-serif;
      color: #53657d;
      color: var(--darker-grey);
    }

    .section-dark .section__subtitle,
    .section-color .section__subtitle,
    .section-dark a,
    .section-color a {
      color: currentColor;
    }

    .section-dark a:hover,
    .section-color a:hover {
      background: #53657d;
      background: var(--darker-grey);
    }

    .section__title + .row,
    .section__subtitle + .row {
      margin-top: 3em;
      margin-top: var(--space-xl);
    }

    .section__title,
    .section__subtitle {
      text-align: center;
    }

    .section__title + .section__subtitle {
      margin-top: -var(--space-s);
    }

    .article {
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -moz-font-feature-settings: "liga" on;
      padding: 0;
      background: #fff;
      background: var(--white);
      color: #26353f;
      color: var(--theme-dark-text);
      line-height: 1.5;
      margin: 0 auto;
    }

    .article__hero {
      height: 38vh;
      width: 100%;
      overflow: hidden;
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
          -ms-flex-align: center;
              align-items: center;
      -webkit-box-pack: center;
          -ms-flex-pack: center;
              justify-content: center;
    }

    .article__hero img {
      width: 100%;
      -webkit-filter: brightness(0.5);
              filter: brightness(0.5);
      position: absolute;
      z-index: 0;
    }

    .article__hero .article__container {
      z-index: 10;
      -webkit-box-align: start;
          -ms-flex-align: start;
              align-items: start;
      width: 100%;
    }

    .article__content {
      margin: 0;
    }

    .article__content .article__container {
      margin: 0 auto;
      padding: 2em 0 calc(2em * 2);
      padding: var(--space-l) 0 calc(var(--space-l) * 2);
    }

    .richtext + .article__author {
      margin-top: 1em;
      margin-top: var(--space-s);
    }

    .article__author-list {
      padding-top: 1em;
      padding-top: var(--space-s);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
    }

    .article__author {
      display: inline-block;
      max-width: 270px;
      padding: 1em;
      padding: var(--space-s);
      font-size: 15px;
    }

    .article__author + .article__author {
      margin-left: 1em;
      margin-left: var(--space-s);
      margin-top: 0;
    }

    .article__author img {
      height: 32px;
      width: 32px;
      border-radius: 50%;
      display: inline-block;
      float: right;
    }

    .article__author-info {
      display: inline-block;
    }

    .article__author-name {
      font-weight: 700;
    }

    .article__author-role {
      color: #53657d;
      color: var(--darker-grey);
      font-size: 0.9em;
      line-height: 0.8em;
    }

    .article__author-description p:last-child {
      margin-bottom: 0;
    }

    /* article list for blog and alike */
    .article__preview {
      margin: 0 auto;
      padding: 1.5em;
      padding: var(--space-m);
    }

    .article__preview + .article__preview {
      margin-top: 2em;
    }

    .article__preview .article__author {
      width: auto;
      padding: 0;
      margin-bottom: 1em;
      margin-bottom: var(--space-s);
    }

    .article__preview .article__author img {
      float: none;
      vertical-align: middle;
    }

    .article__preview img + .article__author-name {
      margin-left: 0.5em;
      margin-left: var(--space-xs);
    }

    a.article__link {
      color: #26353f;
      color: var(--theme-dark-text);
      text-decoration: none;
    }

    .article__title {
      margin-bottom: 0;
    }

    .article__full .article__title,
    .article__full .article__meta {
      color: #fff;
      color: var(--theme-light-text);
    }

    .article__thumbnail {
      width: 100%;
      height: 200px;
      overflow: hidden;
      position: relative;
      margin-top: 1em;
      margin-top: var(--space-s);
    }

    .article__thumbnail img {
      width: 100%;
      position: relative;
      top: 50%;
      -webkit-transform: translateY(-50%);
              transform: translateY(-50%);
    }

    @media (max-width: 549px) {
      .article__container,
      .article__hero .article__container {
        width: 85%;
        padding: 0;
      }

      .article__author-list {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }

      .article__author-list .article__author {
        width: 100%;
        margin-left: 0;
      }

      .article__author-list .article__author + .article__author {
        margin-top: 1em;
        margin-top: var(--space-s);
        margin-left: 0;
      }
    }

    .dashboard {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
      -webkit-box-flex: 1;
          -ms-flex: 1 1 auto;
              flex: 1 1 auto;
      min-height: calc(100vh - 73px);
    }

    .dashboard .side-menu {
      -webkit-box-flex: 1;
          -ms-flex: 1 1 auto;
              flex: 1 1 auto;
      background: #fff;
      background: var(--white);
    }

    .dashboard .side-menu ul {
      margin-top: 0;
      padding: 0;
      list-style-type: none;
    }

    .dashboard .side-menu a {
      padding: 1em 2em;
      padding: var(--space-s) var(--space-l);
      display: block;
      width: 100%;
      color: #26353f;
      color: var(--theme-dark-text);
      text-decoration: none;
    }

    .dashboard .side-menu a.active {
      background: linear-gradient(to right, #0053b3, #0053b3 5px, #ebeff3 5px, #ebeff3);
      background: linear-gradient(to right, var(--theme-primary), var(--theme-primary) 5px, var(--lighter-grey) 5px, var(--lighter-grey));
    }

    .dashboard .side-menu a:hover {
      color: #0053b3;
      color: var(--theme-primary);
    }

    .dashboard .main {
      padding: 2em;
      padding: var(--space-l);
      -webkit-box-flex: 1;
          -ms-flex: 1 1 75%;
              flex: 1 1 75%;
      background: #ebeff3;
      background: var(--lighter-grey);
    }

    .dashboard .main > :first-child {
      margin-top: 0;
    }

    @media (max-width: 749px) {
      .dashboard {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }
    }

    .documentation {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
    }

    .side-pane {
      padding: 2em 0;
      padding: var(--space-l) 0;
      -webkit-box-flex: 0;
          -ms-flex: 0 0 25%;
              flex: 0 0 25%;
      font-size: 14px;
    }

    .side-pane li {
      list-style-type: none;
    }

    .side-pane h2 {
      margin-top: 0;
      padding: 0.5em;
      padding: var(--space-xs);
    }

    .side-pane .side-pane__menu {
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 100%;
      float: right;
    }

    .side-pane__title h3 {
      font-family: 'Source Sans Pro';
      text-transform: uppercase;
      padding-bottom: 1em;
      padding-bottom: var(--space-s);
      border-bottom: 1px solid #adb9c9;
      border-bottom: 1px solid var(--theme-border);
      font-weight: 400;
      font-size: 1em;
    }

    .side-pane a {
      padding: 0.5em 0;
      padding: var(--space-xs) 0;
      display: block;
      width: 100%;
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      color: #26353f;
      color: var(--theme-dark-text);
      text-decoration: none;
    }

    .side-pane a:hover {
      text-decoration: underline;
      background: 0;
    }

    .side-pane li.side-pane__dropdown > a {
      background: url("images/icons/external/arrow-right.svg") no-repeat;
      background-position: center right 1em;
      background-position: center right var(--space-s);
      background-size: 15px 15px;
    }

    .side-pane li.side-pane__dropdown > a:hover {
      background: url("images/icons/external/arrow-right.svg") no-repeat;
      background-position: center right 1em;
      background-position: center right var(--space-s);
      background-size: 15px 15px;
      text-decoration: underline;
    }

    .side-pane li.unfolded.side-pane__dropdown > a,
    .side-pane li.unfolded.side-pane__dropdown > a:hover {
      background-image: url("images/icons/external/arrow-down.svg");
    }

    .side-pane li.active.side-pane__dropdown a {
      font-weight: 700;
    }

    .side-pane__dropdown.unfolded .side-pane__submenu {
      display: block;
    }

    .side-pane__submenu {
      padding-left: 1em;
      padding-left: var(--space-s);
      display: none;
    }

    .side-pane__submenu a,
    .side-pane__submenu a:visited {
      padding: 0.5em;
      padding: var(--space-xs);
      list-style-type: none;
      color: #53657d;
      color: var(--darker-grey);
      border-radius: 3px;
      border-radius: var(--theme-border-radius);
      text-decoration: none;
      display: inline-block;
    }

    .side-pane__submenu li.active {
      color: #0053b3;
      color: var(--theme-primary);
    }

    .side-pane__submenu li.active a {
      font-weight: 700;
      color: #0053b3;
      color: var(--theme-primary);
    }

    .main-pane {
      padding: 3em;
      padding: var(--space-xl);
      background: #fff;
      background: var(--white);
      -webkit-box-flex: 1;
          -ms-flex: 1;
              flex: 1;
    }

    .main-pane h1:first-child {
      margin-top: 0;
    }

    @media (max-width: 749px) {
      .documentation {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }

      .side-pane {
        border-right: none;
        border-bottom: 1px solid #c9d3df;
        border-bottom: 1px solid var(--theme-border-lighter);
        -webkit-box-flex: 1;
            -ms-flex: auto;
                flex: auto;
      }

      .side-pane .side-pane__menu {
        max-width: unset;
        float: none;
      }

      .main-pane,
      .side-pane {
        padding-left: 0;
        padding-right: 0;
      }
    }

    @media (min-width: 1000px) {
      .main-pane .markdown {
        width: 80%;
      }

      .side-pane {
        padding: 3em 0;
        padding: var(--space-xl) 0;
        -webkit-box-flex: 0;
            -ms-flex: 0 0 20rem;
                flex: 0 0 20rem;
      }
    }

    /* helpers for evertyhing else */
    .text-left {
      text-align: left;
    }

    .text-center {
      text-align: center;
    }

    .text-right {
      text-align: right;
    }

    .text-blue {
      color: #0053b3;
      color: var(--blue);
    }

    .text-grey-lightest {
      color: #fafbfc;
      color: var(--lightest-grey);
    }

    .text-grey-lighter {
      color: #ebeff3;
      color: var(--lighter-grey);
    }

    .text-grey-light {
      color: #c9d3df;
      color: var(--light-grey);
    }

    .text-grey {
      color: #adb9c9;
      color: var(--grey);
    }

    .text-grey-dark {
      color: #8393a7;
      color: var(--dark-grey);
    }

    .text-grey-darker {
      color: #53657d;
      color: var(--darker-grey);
    }

    .text-grey-darkest {
      color: #26353f;
      color: var(--darkest-grey);
    }

    .text-black {
      color: #1c1c1c;
      color: var(--black);
    }

    .text-green {
      color: #03bd5b;
      color: var(--green);
    }

    .text-orange {
      color: #ff9947;
      color: var(--orange);
    }

    .text-red {
      color: #d63626;
      color: var(--red);
    }

    .row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: justify;
          -ms-flex-pack: justify;
              justify-content: space-between;
      -webkit-box-align: stretch;
          -ms-flex-align: stretch;
              align-items: stretch;
      margin-left: -var(--space-s);
      margin-right: -var(--space-s);
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
          -ms-flex-direction: row;
              flex-direction: row;
    }

    .row > * {
      max-width: 50em;
    }

    .row > * + * {
      margin-left: 1.5em;
      margin-left: var(--space-m);
    }

    @media (max-width: 749px) {
      .row {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
      }

      .row > * + * {
        margin-left: 0;
        margin-top: 1.5em;
        margin-top: var(--space-m);
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      grid-gap: 1em;
      grid-gap: var(--space-s);
      margin-top: 1em;
      margin-top: var(--space-s);
      justify-items: center;
      -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
              justify-content: space-evenly;
    }

    .grid .panel + .panel,
    .grid .card + .card {
      margin: 0;
    }

  `}
    </style>
  )
}

export default Template
