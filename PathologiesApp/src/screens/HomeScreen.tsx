// @ts-nocheck
import React from 'react';
import {
  Box,
  Text,
  VStack,
  Select,
  Center,
  Button,
  ChevronDownIcon,
} from 'native-base';
import {usePathologyStore} from 'store/pathologies';
import {getPathologyTypes, pathologies} from 'utils/data';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {
    selectedPathology,
    setSelectedPathology,
    selectedPathologyType,
    setSelectedPathologyType,
  } = usePathologyStore(state => state);

  const handleNavigation = () => {
    navigation.navigate('Agents');
  };

  return (
    <Center bg="white" flex={1}>
      <VStack bg="white" shadow={2} w="90%" space={15} px={5} py={5}>
        <Box>
          <Text color="muted.400" fontSize="xs">
            Selectionner La Pathologie
          </Text>
          <Select
            _actionSheet={{animationPreset: 'fade'}}
            selectedValue={selectedPathology}
            _focus={{
              bg: 'transparent',
            }}
            _selectedItem={{
              bg: 'muted.200',
            }}
            mt={1}
            onValueChange={itemValue => {
              setSelectedPathology(itemValue);
              setSelectedPathologyType('');
            }}
            height={'45px'}
            dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}>
            {pathologies.map((pathology, idx) => (
              <Select.Item
                key={idx}
                label={pathology.label}
                value={pathology.value}
              />
            ))}
          </Select>
        </Box>
        <Box>
          <Text color="muted.400" fontSize="xs">
            Type D'atteinte
          </Text>
          <Select
            _actionSheet={{animationPreset: 'fade'}}
            selectedValue={selectedPathologyType}
            _focus={{
              bg: 'transparent',
            }}
            _selectedItem={{
              bg: 'muted.200',
            }}
            mt={1}
            onValueChange={itemValue => setSelectedPathologyType(itemValue)}
            height={'45px'}
            isDisabled={Boolean(selectedPathology === '')}
            dropdownIcon={<ChevronDownIcon size={4} color="black" mr={3} />}>
            {selectedPathology &&
              getPathologyTypes(selectedPathology).map(
                (
                  pathologyType: {label: string; value: string},
                  idx: React.Key | null | undefined,
                ): any => (
                  <Select.Item
                    key={idx}
                    label={pathologyType.label}
                    value={pathologyType.value}
                  />
                ),
              )}
          </Select>
        </Box>
        <Button
          onPress={handleNavigation}
          mt={5}
          bg="primary.600"
          isDisabled={Boolean(selectedPathologyType === '')}>
          Afficher les agents
        </Button>
      </VStack>
    </Center>
  );
};

export default HomeScreen;
