import * as React from 'react';
import styles from './Mobx2.module.scss';
import { IMobx2Props } from './IMobx2Props';
import { escape } from '@microsoft/sp-lodash-subset';
import {observable} from 'mobx';

export default class Mobx2 extends React.Component<IMobx2Props, {}> {
  public render(): React.ReactElement<IMobx2Props> {
    return (
      <div className={ styles.mobx2 }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
