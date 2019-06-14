// registrationConfirmation
import * as React from 'react';
import styledComponents from 'styled-components';

const Table: any = styledComponents.table`
  border-collapse: collapse;
  border-spacing: 0;
  padding: 0;
  text-align: left;
  vertical-align: top;
  width: 100%;
`;

const TableContent: any = styledComponents.table`
  width: 280px;
  margin: auto;
`;

const TableCard: any = styledComponents.table`
  background: #ffffff;
  border-collapse: collapse;
  border-radius: 6px;
  border-spacing: 0;
  box-shadow: 0 1px 8px 0 rgba(28, 35, 43, 0.15);
  float: none;
  margin: 0 auto;
  overflow: hidden;
  padding: 0;
  text-align: center;
  vertical-align: top;
  width: 580px;
`;

const TBody: any = styledComponents.tbody`
  width: 100%;
`;

const TR: any = styledComponents.tr`
  width: 100%;
`;

const TD: any = styledComponents.td`
  width: 100%;
`;
const Title: any = styledComponents.h3`
  width: 100%;
  text-align: left;
`;
const Text: any = styledComponents.p`
  width: 100%;
  text-align: left;
`;

const Image: any = styledComponents.img`
  -ms-interpolation-mode: bicubic;
  clear: both;
  display: block;
  margin: 0 auto;
  max-width: 100%;
  outline: none;
  text-align: center;
  text-decoration: none;
  width: auto;
`;

export const RegistrationConfirmation = () => (
  <Table>
    <TBody>
      <TR>
        <TD>
          <Table>
            <TBody>
              <TR>
                <TD height={'30px'} />
              </TR>
            </TBody>
          </Table>
          <Table>
            <TBody>
              <TR>
                <TD height="30px" />
              </TR>
            </TBody>
          </Table>
          <TableCard>
            <TBody>
              <TR>
                <TD>
                  <TableContent>
                    <TBody>
                      <TR>
                        <TD>
                          <Table>
                            <TBody>
                              <TR>
                                <TD height={'30px'} />
                              </TR>
                            </TBody>
                          </Table>

                          <Table>
                            <TBody>
                              <TR>
                                <TD>
                                  <Image
                                    width={'250'}
                                    src={
                                      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE8sFlH0Ly5aNKA20oIfJJNiC50N_irEdj5Q3v-_hYt-QppG1v'
                                    }
                                    align={'center'}
                                  />
                                </TD>
                              </TR>
                            </TBody>
                          </Table>
                          <Table>
                            <TBody>
                              <TR>
                                <TD height={'30px'} />
                              </TR>
                            </TBody>
                          </Table>
                          <Title>You're ready to go!</Title>
                          <Text>
                            Hey Smiles Davis, We've finished setting up your Universe account. Just
                            confirm your email to get started!
                          </Text>
                          <Table>
                            <TBody>
                              <TR>
                                <TD height={'30px'} />
                              </TR>
                            </TBody>
                          </Table>
                        </TD>
                      </TR>
                    </TBody>
                  </TableContent>
                </TD>
              </TR>
            </TBody>
          </TableCard>
        </TD>
      </TR>
    </TBody>
  </Table>
);

export default RegistrationConfirmation;
