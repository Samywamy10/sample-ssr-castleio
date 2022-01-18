import React, { useEffect } from "react";

import * as Castle from '@castleio/castle-js';


const App = () => {
  // works
  // useEffect(() => {
  //   Castle.configure('appId');
  // })

  // doesn't work
  Castle.configure('appId');

  return (
    <div>
      <h1>Test</h1>
    </div>
  );
};

export default App;
