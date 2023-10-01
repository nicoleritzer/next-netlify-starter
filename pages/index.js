import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
<style>
    * {
        font-family: 'Source Code Pro', monospace;
      }

      .page {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        display: flex;
        flex-direction: column;
        font-size: 0.9em;
      }

      header {
        display: flex;
        align-items: center;
        padding: 10px 20px;
      }

      header h1 {
        margin: 0;
        padding-right: 10px;
      }

      header a {
        color: #08f;
        text-decoration: none;
        padding: 0px 10px;
      }

      header a:hover {
        text-decoration: underline;
      }

      .converter {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }

      .split {
        display: flex;
        align-self: stretch;
        flex-direction: column;
        flex: 1;
        box-shadow: 1px 0 0 #eee;
      }

      .pane {
        display: flex;
        flex-direction: column;
        flex: 1;
        align-self: stretch;
        padding: 20px;
        font-size: 1em;
        border: none;
        margin: 0px;
        outline: none;
        overflow: auto;
      }

      .pane label {
        display: block;
        text-transform: uppercase;
        color: #555;
        margin-bottom: 5px;
      }

      .pane-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #eee;
        padding: 10px 20px;
      }

      #source {
        flex: 1;
        display: flex;
        align-self: stretch;
        border: none;
        background-color: transparent;
        outline: none;
        padding: 0px;
        font-size: inherit;
      }

      #output {
        margin: 0;
        padding: 0;
      }
    </style>
      <div className="container">
    <div class='page'>
      <div class='converter'>
        <div class='split'>
          <div class='pane-header'>
            
          </div>
          <div class='pane pane-source'>
            <textarea id='source' placeholder='<div>HTML to transform</div>'></textarea>
          </div>
        </div>
        <div class='split'>
          <div class='pane-header'>
          </div>
          <div class='pane pane-output'>
            <pre id='output'></pre>
          </div>
        </div>
      </div> 
    </div>
  )
}
