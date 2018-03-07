# MyComponentGenerator

### Installation

```sh
sudo npm install -g yo
git clone https://github.com/Nikest/MyComponentGenerator.git
cd MyComponentGenerator
npm install
sudo npm link
```

### How to use

```sh
yo component
```

###Answers

##### Enter name of the component
Name of the component

##### Generate with Relay?
Y/n - generator will create component with Relay decorator or without

##### Enter the HTML tag wrapper
generator create html tad in component render method.
An example:
```sh
<div></div>
```
'div' is default

##### Add a specific path or directory?
Yeoman will generate templates to directory whitc you enter.
An example (if you create component before and now want create children component):

ParentComponent/[directory of children component name]/
