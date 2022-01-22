import React from 'react';
import { Typography, Button } from '../../atoms';
import { Wrapper, CTA, LastEdited } from './TitleBar.style';
import { Eye } from '../../../assets/icons';
import data from '../../../dummy.json';

export default function TitleBar() {
  return (
    <Wrapper>
      <div>
        <Typography text={data.titlePage} size="medium" weight="600" />
        <LastEdited>
          <Typography text={`Last Edited ${data.lastEdited}`} color="#8189A2" />
        </LastEdited>
      </div>
      <CTA>
        <Button text="Preview" icon={Eye} color="#6F32D2" variant="outlined" />
      </CTA>
    </Wrapper>
  );
}
