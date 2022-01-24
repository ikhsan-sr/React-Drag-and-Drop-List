import styled from 'styled-components';

export const Wrapper = styled.div`
  display: inline-block;
  width: 100%;
  background-color: #FFFFFF;
`;

export const Lesson = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `;
  
export const LessonName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  `;
  
export const Detail = styled.div`
  display: flex;  
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const Option = styled.div`
  text-align: center;
  width: 25px;
  padding: 3px;
  border-radius: 8px;
  cursor: pointer;
  background-color: #F6F8FC;
`;

export const LinkDownload = styled.div`
  cursor: pointer;
`;