var Generator = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(`Welcome to the Stanislav's ${chalk.red('Standart Component')} quick generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter name of the component',
        default: 'Default'
      },
      {
        type: 'input',
        name: 'tagName',
        message: 'Enter the HTML tag wrapper',
        default: 'div'
      },
      {
        type: 'input',
        name: 'directory',
        message: 'Add a specific path or directory?',
        default: ''
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    const componentName = this.props.componentName;
    const tag = this.props.tagName;
    const path = this.props.directory? this.props.directory : '';

    this.fs.copyTpl(
      this.templatePath('component/component.template'),
      this.destinationPath(`${path}${componentName}/${componentName}.tsx`),
      {
        name: componentName,
        tag: tag
      }
    );
    this.fs.copyTpl(
      this.templatePath('component/component.styles'),
      this.destinationPath(`${path}${componentName}/${componentName}.scss`),
      {
        name: componentName
      }
    );
    this.fs.copyTpl(
      this.templatePath('component/index.template'),
      this.destinationPath(`${path}${componentName}/index.tsx`),
      {
        name: componentName
      }
    );
  }
};
