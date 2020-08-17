import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_hello extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab-hello',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab-hello is activated!');
  }
};

export default extension;
