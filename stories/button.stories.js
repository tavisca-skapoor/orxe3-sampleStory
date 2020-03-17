import { html } from 'lit-html';
import '@bit/orxe_3.base.button';
import { storiesOf } from '@storybook/web-components';
import { withKnobs, text, boolean, select} from "@storybook/addon-knobs";
import buttonProps from '../props/buttonProps';
import { withA11y } from '@storybook/addon-a11y';
import { withActions } from '@storybook/addon-actions';
import './buttonStyles1.scss';
import './buttonStyles2.scss';


storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withA11y)
  .addDecorator(withActions('onFocus','onBlur','onClick'))
  .add('orxe-button', () => html`
  <orxe-button type="reset" kind= ${select("kind", buttonProps.kind, buttonProps.kind[0])} size=${select("size", buttonProps.size, buttonProps.size[0])}>  ${text("Label", "Hello Storybook")}  </orxe-button>
  `, {
  themes: [
    { name: 'twitter', class: 'theme-twt', color: '#00aced', default: true },
    { name: 'facebook', class: 'theme-fb', color: '#3b5998' },
  ],
  })
  ;

  
  


