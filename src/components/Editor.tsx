import MonacoEditor, { OnMount, OnChange } from '@monaco-editor/react';

interface Properties {
  onChange: OnChange;
  onMount: OnMount;
}

const Editor = ({ onChange, onMount }: Properties) => {
  return (
    <MonacoEditor
      theme='vs-dark'
      height='100%'
      width='100%'
      defaultLanguage='javascript'
      defaultValue='// Use print() to show any content in preview window!'
      options={{
        wordWrap: 'on',
        minimap: { enabled: false },
        lineNumbersMinChars: 3,
        folding: false,
        fontSize: 16,
        automaticLayout: true,
      }}
      onChange={onChange}
      onMount={onMount}
    />
  );
};

export default Editor;
