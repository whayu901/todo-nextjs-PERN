const AboutDetail = ({ params }: { params: { aboutId: string } }) => {
  return <div>{`hello ${params.aboutId}`}</div>;
};

export default AboutDetail;
