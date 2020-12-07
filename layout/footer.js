import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default props => <footer id="footer">
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          My Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
      </footer>