import React, { useEffect, useState } from 'react';
import ForgeReconciler, { Heading, Box, Inline, Image, Link, xcss, Stack, Tabs, Tab, TabList, TabPanel, Text } from '@forge/react';
import { invoke } from '@forge/bridge';

const App = () => {

  const exampleBoxStyle = xcss({
        backgroundColor: 'color.background.accent.purple.subtler',
        borderRadius: 'border.radius',
        borderStyle: 'solid',
        borderWidth: 'border.width',
        borderColor: 'color.border.discovery',
        padding: 'space.200',
        width: '50%'   
      });

  const containerBoxStyle = xcss({
          backgroundColor: 'color.background.accent.purple.subtler',
          width: '50%'
        });

  const wideContainerBoxStyle = xcss({
          backgroundColor: 'color.background.accent.purple.subtlest'        
        });

  const exampleSmallBoxStyle = xcss({
          backgroundColor: 'color.background.accent.magenta.subtler',
          borderRadius: 'border.radius',
          borderStyle: 'solid',
          borderWidth: 'border.width',
          borderColor: 'color.border.accent.magenta',
          padding: 'space.200',
        });

  const exampleSmallBoxInlineStyle = xcss({
          backgroundColor: 'color.background.accent.blue.subtler',
          borderRadius: 'border.radius',
          borderStyle: 'solid',
          borderWidth: 'border.width',
          borderColor: 'color.border.accent.blue',
          padding: 'space.200',
          width: '50%'
        });


  const InlineExample1 = () => {
    return (
      <>
      <Heading as="h2">Inline</Heading>
      <Text>Three boxes being displayed within an inline component (default).</Text>
      <Inline>
        <Box xcss={exampleSmallBoxStyle} />
        <Box xcss={exampleSmallBoxStyle} />
        <Box xcss={exampleSmallBoxStyle} />
      </Inline>
      </>
    )
  }

  const StackExample1 = () => {
    return (
      <>
      <Heading as="h2">Stack</Heading>
      <Text>Three boxes being displayed within a stack component ().</Text>
      <Stack>
        <Box xcss={exampleSmallBoxStyle} />
        <Box xcss={exampleSmallBoxStyle} />
        <Box xcss={exampleSmallBoxStyle} />
      </Stack>
      </>
    )
  }

  const ex1HeaderBoxStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '100%'   
  });

  const ex1ContainerStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtlest',
    width: '100%'   
  });

  const ex1CenterStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '50%'   
  });

  const ex1MarginStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '25%'   
  });

  const LayoutExample1 = () => {
    return (
      <>
        <Heading as="h2">Layout Example 1</Heading>
        <Stack>
          <Box xcss={ex1HeaderBoxStyle}>
            <Inline space="space.200">
              <Link href="https://atlassian.com">Nav1</Link>
              <Link href="https://atlassian.com">Nav2</Link>
              <Link href="https://atlassian.com">Nav3</Link>
            </Inline>
          </Box>
          <Box xcss={ex1ContainerStyle}>
            <Inline alignBlock="stretch">
              <Box xcss={ex1MarginStyle}>
                
              </Box>
              <Box xcss={ex1CenterStyle}>
                <Heading as="h3">Heading</Heading>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pretium risus et pellentesque cursus. Nulla enim diam, mattis pretium velit in, ornare luctus mauris. Donec quis consectetur sapien, non consectetur leo. Ut suscipit orci vitae vehicula porttitor. Sed maximus rutrum risus. Pellentesque elementum interdum risus in gravida. Nam a augue fermentum, maximus erat eget, hendrerit risus. Sed dolor sapien, varius sit amet tortor et, lobortis dapibus odio. Donec venenatis commodo tortor, at feugiat quam fermentum et. Maecenas consectetur laoreet facilisis. Nunc sed feugiat diam. Nulla feugiat, ligula et venenatis fringilla, tortor ex consectetur nulla, sed facilisis sem nulla nec lectus. Curabitur sagittis sit amet dui vel consequat. Pellentesque lobortis vel ligula vitae ullamcorper. Maecenas nec metus vitae neque gravida auctor.</Text>
                <Text>Quisque ante purus, dictum ut leo non, ornare convallis nulla. Cras iaculis lacus eget felis suscipit, eu tempor lectus tristique. Fusce posuere facilisis tempus. Fusce consequat sapien sed leo euismod suscipit. Nam nec porttitor mi, tincidunt efficitur quam. Donec felis ligula, ultrices id ullamcorper id, semper non velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec malesuada ex nunc, et pretium enim cursus sed. Pellentesque pellentesque placerat urna, non pretium sapien condimentum quis. Phasellus ornare gravida nibh et facilisis. Aliquam aliquam id nisi ut varius. Quisque facilisis urna et sem semper, ut vehicula enim sagittis. In at nibh molestie, sollicitudin augue sit amet, convallis velit. Aenean ac sapien a elit efficitur tempor eget sed velit. Suspendisse et elit nec mauris blandit feugiat. Etiam aliquet ac elit eu auctor.</Text>
                <Text>Fusce maximus quam eget lacus sodales pretium. Maecenas tortor sem, congue ut lectus in, laoreet elementum nisi. Donec non est non tellus egestas malesuada eu eget nisl. Morbi pretium enim est, sed gravida massa aliquet ut. Vivamus nisl leo, imperdiet in massa ut, placerat placerat est. Quisque nec lectus rhoncus, ultrices magna ac, finibus lectus. Vivamus sed viverra tellus, et ultrices metus. Donec quis felis nisl. Vestibulum interdum vel sem nec euismod. Etiam eu aliquet erat. Sed ut magna vestibulum, luctus tortor at, tristique ligula.</Text>
              </Box>
              <Box xcss={ex1MarginStyle}>

              </Box>
            </Inline>
          </Box>
          <Box xcss={ex1HeaderBoxStyle}>
          <Inline alignInline="center">
            <Text>Some other text</Text>
          </Inline>
          </Box>
        </Stack>

      </>
    )
  }

  const LayoutExample2 = () => {
    return (
      <>
      <Heading as="h2">Layout Example 2</Heading>
      <Inline space="space.200" alignInline='center' alignBlock='stretch'>
        <Box xcss={exampleBoxStyle}>
          <Heading as="h3">Heading</Heading>
          <Text>Some text</Text>
          <Text>Some more text</Text> 
        </Box>
        <Box xcss={containerBoxStyle}>
          <Stack space="space.200">
            <Box xcss={wideContainerBoxStyle}>
              <Inline space="space.200" alignBlock="stretch">
                <Box xcss={exampleSmallBoxInlineStyle}>
                  <Heading as="h4">Heading</Heading>
                  <Text>Some text</Text>
                </Box>
                <Box xcss={exampleSmallBoxInlineStyle}>
                  <Heading as="h4">Heading</Heading>
                  <Text>Some longer text</Text>
                </Box>            
              </Inline>
            </Box>
            <Box xcss={wideContainerBoxStyle}>
              <Inline space="space.200" alignBlock="stretch">
                <Box xcss={exampleSmallBoxInlineStyle}>
                  <Heading as="h4">Heading</Heading>
                  <Text>Some text</Text>
                </Box>
                <Box xcss={exampleSmallBoxInlineStyle}>
                  <Heading as="h4">Heading</Heading>
                  <Text>Some text</Text>
                </Box>            
              </Inline>
            </Box>
          </Stack>
        </Box>
         
      </Inline>
      </>
    )
  }

  const example3BoxStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '80%'
  });

  const example3CardStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtle',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '20%'
  });
  const example3CardPhotoStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    padding: 'space.100',
    height: '150px'
  });

  const example3AltCardStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtle',
    borderRadius: 'border.radius',
    borderStyle: 'solid',
    borderWidth: 'border.width',
    borderColor: 'color.border.discovery',
    padding: 'space.200',
    width: '75%'
  });

  const example3AltCardPhotoStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    padding: 'space.200',
    width: '30%'
  });
  const example3AltCardTextStyle = xcss({
    backgroundColor: 'color.background.accent.purple.subtler',
    padding: 'space.200',
    width: '70%'
  });


  const LayoutExample3 = () => {
    return (
      <>
        <Heading as="h2">Layout Example 3</Heading>
        <Stack alignInline="center" space="space.200">
          <Box xcss={example3BoxStyle}>
            <Inline space="space.200" alignInline="center" alignBlock="stretch">
              <Box xcss={example3CardStyle}>
                <Stack space="space.200" alignInline="center">
                  <Box xcss={example3CardPhotoStyle}>
                    <Image src="https://i.imgur.com/Jvh1OQm.jpeg" size="large" alt="Mr Whiskers the cat"></Image>
                  </Box>
                  <Box>
                    <Text>cats secretly make all the worlds muffins.</Text>
                  </Box>
                </Stack>
              </Box>
              <Box xcss={example3CardStyle}>
              <Stack space="space.200" alignInline="center">
                  <Box xcss={example3CardPhotoStyle}>
                    <Image src="https://i.imgur.com/pSafUhg.jpeg" size="large" alt="Mr Whiskers the cat"></Image>
                  </Box>
                  <Box>
                    <Text>Stand in front of the computer screen stares at human while pushing stuff off a table.</Text>
                  </Box>
                </Stack>
              </Box>
              <Box xcss={example3CardStyle}>
              <Stack space="space.200" alignInline="center">
                  <Box xcss={example3CardPhotoStyle}>
                    <Image src="https://i.imgur.com/SpCbHBI.jpeg" size="large" alt="Mr Whiskers the cat"></Image>
                  </Box>
                  <Box>
                    <Text>Demand to be let outside at once, and expect owner to wait for me as i think about it</Text>
                  </Box>
                </Stack>
              </Box>
            </Inline>
          </Box>
          <Box xcss={example3BoxStyle}>
            <Stack alignInline="center" space="space.200">
              <Box xcss={example3AltCardStyle}>
                <Inline alignBlock="center" space="space.200">
                  <Box xcss={example3AltCardPhotoStyle}>
                    <Image size="xlarge" src="https://i.imgur.com/Jvh1OQm.jpeg" alt="Mr Whiskers the cat"></Image>
                  </Box>
                  <Box xcss={example3AltCardTextStyle}>
                    <Text>Singapura thai munchkin abyssinian , so mouser cornish rex. Burmese jaguar. Singapura. Havana brown burmese but puma savannah, so singapura for tiger, lynx. Cheetah siberian malkin munchkin or sphynx, so havana brown. Grimalkin cougar so munchkin cougar russian blue. Tiger. Tabby scottish fold for ragdoll. Maine coon bobcat persian so sphynx kitten. Singapura tiger malkin bombay but puma tabby. British shorthair siberian. Tom jaguar ocicat savannah cougar so cougar. British shorthair bobcat or siberian or scottish fold leopard or kitten.</Text>
                  </Box>
                </Inline>
              </Box>
              <Box xcss={example3AltCardStyle}>
                <Inline alignBlock="center" space="space.200">
                  <Box xcss={example3AltCardTextStyle}>
                    <Text>Russian blue abyssinian for norwegian forest cougar himalayan tom burmese. Manx american bobtail british shorthair panther or cornish rex for devonshire rex. Siamese grimalkin. Tom american shorthair puma so tomcat malkin or ragdoll. Russian blue bombay. Manx jaguar munchkin tom scottish fold persian. Ocelot havana brown but turkish angora american bobtail, cougar yet siberian.</Text>
                  </Box>
                  <Box xcss={example3AltCardPhotoStyle}>
                    <Image size="xlarge" src="https://i.imgur.com/Jvh1OQm.jpeg" alt="Mr Whiskers the cat"></Image>
                  </Box>
                </Inline>
              </Box>
            </Stack>

          </Box>
        </Stack>
      </>
    )
  }

  const LayoutExamplen = () => {
    return (
      <>
      </>
    )
  }

  return (
    <>
    <Heading as="h1">Flexbox Examples</Heading>
    <Tabs id="default">
      <TabList>
        <Tab>Example 1</Tab>
        <Tab>Example 2</Tab>
        <Tab>Example 3</Tab>
      </TabList>
      <TabPanel>
      <Box xcss={{width: '100%',  backgroundColor: 'color.background.accent.lime.subtler'}}>
        <LayoutExample1/>
      </Box>
      </TabPanel>
      <TabPanel>
      <Box xcss={{width: '100%',  backgroundColor: 'color.background.accent.lime.subtler'}}>
        <LayoutExample2/>
      </Box>
      </TabPanel>
      <TabPanel>
      <Box xcss={{width: '100%',  backgroundColor: 'color.background.accent.lime.subtler'}}>
        <LayoutExample3/>
      </Box>
      </TabPanel>
      </Tabs>
    </>
  );
};

ForgeReconciler.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
