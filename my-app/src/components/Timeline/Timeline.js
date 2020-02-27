import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import photographersData from '../../assets/photographersData';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'

function Timeline(props) {
  const id = props.id;
  const lang = props.lang;
  return <VerticalTimeline className='timeline'>
    {photographersData[id][lang].timeline.map((event) => ( 
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date={event.date}
        iconStyle={{ background: '#1890FF', color: '#fff' }}
        contentStyle={{ borderTop: '3px solid #1890FF' }}
        icon={<FontAwesomeIcon icon={faCameraRetro} className='awesome'/>}
      >
      <p style={{margin: 0}}>
        {event.fact}
      </p>
      </VerticalTimelineElement>
    ))}
  </VerticalTimeline>
}

export default Timeline;
