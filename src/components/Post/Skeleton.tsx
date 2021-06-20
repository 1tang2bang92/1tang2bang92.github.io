import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
  skeleton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    marginBottom: '1rem',
    padding: '2rem',
  },
  bar: {
    margin: '1rem 0rem',
  }
})

const SkeletonPost = () => {

  const classes = useStyle();

  return (
    <Paper className={classes.skeleton} elevation={8}>
        <Typography variant="h1">
          <Skeleton animation="wave" />
        </Typography>
        <Typography variant="h3">
          <Skeleton animation="wave" width={300}/>
        </Typography>
        <Divider className={classes.bar}/>
        <Skeleton variant="rect" height={200} animation="wave" />
        {
          [0,1,2].map((idx) => (
              <Typography key={`skeletonTypograpy${idx}`} variant="h6">
                <Skeleton key={`skeletonSkeleton${idx}`} variant="text" animation="wave" />
              </Typography>          
              )     
          )
        }
    </Paper>
  )
}

export default SkeletonPost;