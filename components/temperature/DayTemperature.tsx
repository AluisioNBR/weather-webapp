import { colors } from "../../styles/colors";
import { DayModal } from "./DayModal";
import {
  Stack,
  Text,
  Button,
  Image,
  useMediaQuery,
  useDisclosure,
} from "@chakra-ui/react";
import type { DayTemperatureProps } from "../../types/temperature/DayTemperatures.types";

export function DayTemperature(props: DayTemperatureProps) {
  const [isLowerThan720] = useMediaQuery("(max-width: 720px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Button
      onClick={onOpen}
      bg={colors.black["3"]}
      _hover={{ "background-color": colors.black["2"] }}
      _active={{ "background-color": colors.black["3"] }}
      w="100%"
      h="1rem"
      p={5}
      m={2}
      borderRadius="2.5rem"
    >
      <DayModal isOpen={isOpen} onClose={onClose} date={props.date}>
        {props.children}
      </DayModal>

      <Stack direction="row" w="100%" h="100%" align="center" justify="center">
        <Text color={colors.white.main} fontSize="14px" fontFamily="Poppins">
          {props.date}
        </Text>

        <Stack direction="row" align="center">
          <Image src={props.children.icon} alt="Temp Icon" boxSize={12} />

          <Text color={colors.white.main} fontSize="14px" fontFamily="Poppins">
            {props.children.temp.min}°C - {props.children.temp.max}°C
          </Text>
        </Stack>
      </Stack>
    </Button>
  );
}
