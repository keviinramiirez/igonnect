import './IDecideCard.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    objectFit: 'cover'
  },
  media: {
    height: 150,
  },
});

function IDecideCard({ title, image, context, link }) {
  const classes = useStyles();

  const width = window.innerWidth

  // const [tittleVariant, setTitleVariant] = useState((width > 768) ? 'h6' : 'body1')
  // const [contextVariant, setContextVariant] = useState((width > 768) ? 'body2' : 'caption')

  return (
    <div className='idecideCard'>
      <Card className={classes.root} onClick={() => window.open(link, '_blank')}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={image}
            title={title}
          />
          <CardContent>
            <Typography gutterBottom variant={(width > 560) ? 'h6' : 'body1'} component='h2'>
              {title}
            </Typography>
            <Typography variant={(width > 560) ? 'body2' : 'caption'} color='textSecondary' >
              {context}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default IDecideCard
