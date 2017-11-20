import React from 'react'
import {Link,Switch,Route} from 'react-router-dom'
import Repo from 'Repo';
import Pvg_Info from 'Pvg_Info';
import Inf from 'Inf';
import TabDemo from 'TabDemo';
export default React.createClass({
  render() {
    return (
      <div className="layout-close-account">
        <ul className="nav nav-tabs tab-menu-close-account">
            <li key="1" role="presentation"><Link to="/repos/react-router">Thông tin chung</Link></li>
            <li key="2" role="presentation"><Link to="/repos/react">Thông tin ủy quyền</Link></li>
            <li key="3" role="presentation"><Link to="/repos/react">Thông tin ủy quyền</Link></li>
            <li key="4" role="presentation"><Link to="/repos/react">Thông tin FATCA</Link></li>
            <li key="5" role="presentation"><Link to="/repos/d">Upload</Link></li>
       </ul>

          <div>
              <Switch>
                   <Route exact path="/repos/react-router" component={Inf} />
                   <Route path="/repos/react" component={Pvg_Info} />
                   <Route path="/repos/d" component={TabDemo} />
              </Switch>
          </div>


      </div>
    )
  }
})
// <Route path="/repos/:repoName" component={Repo} />
// {this.props.children}
