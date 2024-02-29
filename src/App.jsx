import {
	Button,
	ChakraProvider,
	Container,
	HStack,
	Input,
	Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import ProgressBar from "./progressBar";

function App() {
	const [milestones, setMilestones] = useState([]);
	const [newMilestoneValue, setNewMilestoneValue] = useState("");

	const handleAddMilestone = () => {
		if (newMilestoneValue != "") {
			const newMilestone = {
				value: parseInt(newMilestoneValue),
			};

			setMilestones([...milestones, newMilestone]);
			setNewMilestoneValue("");
		}
	};

	//If user wants to use default values
	const [isDefault, setIsDefault] = useState(true);
	const defaultMilestones = [{ value: 500 }, { value: 1000 }, { value: 1250 }];
	const handleDefaultMilestones = () => {
		setIsDefault(!isDefault);
		if (isDefault) {
			setMilestones(defaultMilestones);
		} else {
			setMilestones([]);
		}
	};

	return (
		<ChakraProvider>
			<Container>
				<Stack
					p={{ base: 5, md: 10 }}
					minH={"100vh"}
					alignContent="center"
					justifyContent="center"
				>
					<ProgressBar milestones={milestones} />

					<HStack mt={4} alignItems="center" justifyContent={"space-between"}>
						<Input
							type="number"
							placeholder="Milestone value"
							value={newMilestoneValue}
							onChange={(e) => setNewMilestoneValue(e.target.value)}
							mr={2}
						/>
						<Button
							colorScheme="blue"
							onClick={handleAddMilestone}
							mr={2}
							w={"20rem"}
						>
							Add Milestone
						</Button>
					</HStack>
					<Button colorScheme={"teal"} onClick={handleDefaultMilestones}>
						{isDefault ? "Use" : "Remove"} Default Milestones
					</Button>
				</Stack>
			</Container>
		</ChakraProvider>
	);
}

export default App;
